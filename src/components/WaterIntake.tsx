import React, { useState } from 'react';

const WaterIntake = () => {
    const [intake, setIntake] = useState(0);

    const increment = () => setIntake(intake + 1);
    const decrement = () => setIntake(intake > 0 ? intake - 1 : 0);

    return (
        <div className="relative h-[75px] flex justify-between bg-white my-2 mx-4 rounded-lg px-4">
            <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#3D60F4] to-[#577EFE] w-[10px] rounded-l-lg"></div>
            <div className="flex flex-col justify-between pl-4">
                <div className="flex mt-5">
                    <div className="text-[#3d60f4] text-[18px] mr-2">Water</div>
                    <div className="text-black text-[18px]">0.9L (75%)</div>
                </div>
                <div>
                    <div className="text-[#9DA8C3] text-[10px] -mt-[7px]">Minimal recommended intake</div>
                </div>
                <div className="flex space-x-1 mb-2">
                    <img className="w-4 h-4" src="/svg/waterfull.svg" alt="Water" />
                    <img className="w-4 h-4" src="/svg/waterhalf.svg" alt="Water" />
                    <img className="w-4 h-4" src="/svg/waterempty.svg" alt="Water" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div
                    className="text-white text-[22px] font-bold from-[#9FE860] bg-gradient-to-r to-[#50CE3B] p-1 rounded-full cursor-pointer"
                    onClick={decrement}
                >
                    <img className="w-4 h-4" src="/svg/minus.svg" alt="Minus" />
                </div>
                <div className="text-[#9DA8C3] text-[22px] ">{intake}</div>
                <div
                    className="text-white text-[22px] font-bold from-[#9FE860] bg-gradient-to-r to-[#50CE3B] p-1 rounded-full cursor-pointer"
                    onClick={increment}
                >
                    <img className="w-4 h-4" src="/svg/plus.svg" alt="Plus" />
                </div>
            </div>
        </div>
    );
};

export default WaterIntake;
