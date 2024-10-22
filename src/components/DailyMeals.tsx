import React, { useState } from 'react';

const DailyMeals = () => {

    return (

        <div>
            <div className="relative h-[75px] flex justify-between bg-white mx-4 rounded-lg my-2 px-4">
                <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#2ED12E] to-[#53D290] w-[10px] rounded-l-lg"></div>
                <div className="flex flex-col justify-between pl-4">
                    <div className="flex mt-5">
                        <div className="text-[#2ED12E] text-[18px] font-semibold mr-2">Breakfest</div>
                    </div>
                    <div>
                        <div className="text-[#9DA8C3] text-[10px] -mt-[35px]">Recommended Callories</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                    <div className="text-[#9DA8C3] text-[22px] "></div>


                    <a href='foodtracker'>   <div
                        className="text-white text-[22px] font-bold from-[#9FE860] bg-gradient-to-r to-[#50CE3B] p-1 rounded-full cursor-pointer"
                    >
                        <img className="w-4 h-4" src="/svg/plus.svg" alt="Plus" />
                    </div></a>
                </div>
            </div>

        </div>
    );
};

export default DailyMeals;
