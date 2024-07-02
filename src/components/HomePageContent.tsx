import React from "react";
import Calendar from "./Calendar";
import Footer from "./Footer";

const HomePageContent = () => {

  return (
    <div>
          <div className='flex items-center justify-evenly '>
            <div className="bg-gray-400 rounded-full p-2">
          <img className="w-6 h-6" src="/svg/calendar.svg"></img>
          </div>
          <div className="text-black">## Month Day</div>

          <div className="bg-gray-400 rounded-full p-2">
          <div className="bolded text-[24px] text-black">...</div>
          </div>
          </div> 
         <Footer></Footer>
    </div>
  );
};

export default HomePageContent;
