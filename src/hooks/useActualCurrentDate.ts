import { useSyncExternalStore } from "react";

let actualCurrentDate = new Date();
let subscribers: (() => void)[] = []

setInterval(() => {
  const newDate = new Date()

  if (newDate.getDay() === actualCurrentDate.getDay()) {
    return
  }

  actualCurrentDate = newDate
  for (const sub of subscribers) {
    sub()
  }
}, 1000)

export function useActualCurrentDate() {
  return useSyncExternalStore((onChange) => {
    subscribers.push(onChange)
    return () => {
      subscribers = subscribers.filter((sub) => sub !== onChange)
    }
  }, () => actualCurrentDate)
}