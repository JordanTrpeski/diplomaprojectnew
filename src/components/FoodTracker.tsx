import React from 'react';

function FoodTracker() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="bg-gray-200 rounded-full p-2">
        <img className="w-6 h-6" src="/svg/left.svg" alt="left" />
      </div>
      <div className="flex justify-center items-center">
        <div className="text-[#000000] text-[18px] font-semibold mr-2">Breakfest</div>
        <div className='text-gray-400 text-[10px] font-regular'>0 cal</div>
      </div>
      <div className="bg-gray-200 rounded-full p-2">
        <img className="w-6 h-6" src="/svg/plus.svg" alt="left" />
      </div>      

      
    </div>
  );
}

export default FoodTracker;
