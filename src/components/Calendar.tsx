import { useState } from 'react';
import { useActualCurrentDate } from '../hooks/useActualCurrentDate';



const Calendar = ({ initialDate }: { initialDate?: Date }) => {
  const actualCurrentDate = useActualCurrentDate()
  // Initialize state to track the current date
  const [currentDate, setCurrentDate] = useState<Date>(() => initialDate ?? new Date()); // Explicitly define currentDate as Date type
  // Function to get the days in a month for the current date
  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    // Get the number of days in the month (e.g., 28, 29, 30, 31)
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month for the current date
  const getFirstDayOfMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    // Get the day of the week for the 1st day (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    return new Date(year, month, 1).getDay();
  };

  // Function to handle clicking on previous month button
  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return prevMonthDate;
    });
  };

  // Function to handle clicking on next month button
  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return nextMonthDate;
    });
  };

  // Array for days of the week
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Calculate days and weeks for the current month
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfWeek = getFirstDayOfMonth(currentDate);
  const weeks = [];
  let days = [];

  // Fill days array with nulls for preceding days (empty cells in the calendar)
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  // Fill days array with actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  // Split days array into weeks
  while (days.length > 0) {
    weeks.push(days.splice(0, 7));
  }

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span className="focus:outline-none text-base font-bold text-gray-800">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                onClick={prevMonth}
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
              >
                &lt;
              </button>
              <button
                aria-label="calendar forward"
                onClick={nextMonth}
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {daysOfWeek.map((day) => (
                    <th key={day}>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800">{day}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, i) => (
                  <tr key={i}>
                    {week.map((day, j) => (
                      <td key={j} className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          {day ? (
                            <p
                              className={`text-base ${day === actualCurrentDate.getDate() && currentDate.getMonth() === actualCurrentDate.getMonth() && currentDate.getFullYear() === actualCurrentDate.getFullYear()
                                ? 'text-white bg-indigo-700 rounded-full w-8 h-8 flex items-center justify-center'
                                : 'text-gray-500 font-medium'
                                }`}
                            >
                              {day}
                            </p>
                          ) : null}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
