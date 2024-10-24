import React from "react";
import Calendar from "./Calendar";
import Footer from "./Footer";
import WaterIntake from "./WaterIntake";
import DailyMeals from "./DailyMeals";
import FoodTracker from "./FoodTracker";
import ChartNutrients from "./ChartNutrients";


const formatDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString(undefined, options);
};

const HomePageContent = () => {
  const currentDate = formatDate();

  return (
    <div className=" mt-2">
      <div className="flex items-center justify-evenly ">
        <div className="bg-gray-200 rounded-full p-2">
          <img className="w-6 h-6" src="/svg/calendar.svg" alt="Calendar" />
        </div>
        <div className="text-black">{currentDate}</div>
        <div className="bg-gray-200 rounded-full p-2">
          <img className="w-6 h-6" src="/svg/dot.svg" alt="Dot" />
        </div>
      </div>
    <ChartNutrients></ChartNutrients>
    <div className="max-h-60 overflow-y-auto ">
    <WaterIntake></WaterIntake>
    <DailyMeals></DailyMeals>
    <DailyMeals></DailyMeals>
    </div>
      <Footer />
    </div>
  );
};

export default HomePageContent;
