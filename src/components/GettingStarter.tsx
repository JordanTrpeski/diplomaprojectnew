import React, { useState, useEffect } from 'react';

interface ContainerProps { }

const GettingStarter: React.FC<ContainerProps> = () => {
  const [index, setIndex] = useState(0);

  const eatHealthyTexts = [
    'Eat Healthy',
    'Healthy Recipes',
    'Track Your Health'
  ];

  const maintainingHealthTexts = [
    'Maintaining good health should be the <br> primary focus of everyone.',
    'Browse thousands of healthy recipes<br>from all over the world.',
    'With amazing inbuilt toolsyou can <br> track your progress.'
  ];

  const images = [
    '/png/EatHealthy.png',
    '/png/HealthyRecipies.png',
    '/png/TrackYourHealth.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % eatHealthyTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [eatHealthyTexts.length]);

  return (
    <div className="max-w-screenflex h-screen flex-col items-center">
      <div className="text text-center text-[24px]  text-[#91C788]">kcal</div>
      <div className="flex flex-col items-center">
        <div className="mt-[66px] flex h-72 w-72 items-center justify-center">
          <img src={images[index]} alt="Healthy Lifestyle" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center" style={{ height: '120px' }}>
          <span className="flex items-center justify-center text-center text-[25px] text-black font-semibold">
            {eatHealthyTexts[index]}
          </span>
          <div className="mx-[30px]">
            <span className="flex items-center justify-center text-center text-black opacity-45 whitespace-pre-line">
              {maintainingHealthTexts[index].replace('<br>', '\n')}
            </span>
          </div>
        </div>
        <div className="mt-2 flex">
          <div className={`mx-[2px] h-[8px] w-[12px] rounded ${index === 0 ? 'bg-red-500' : 'bg-[#FFC0B8]'}`}></div>
          <div className={`mx-[2px] h-[8px] w-[12px] rounded ${index === 1 ? 'bg-red-500' : 'bg-[#FFC0B8]'}`}></div>
          <div className={`mx-[2px] h-[8px] w-[12px] rounded ${index === 2 ? 'bg-red-500' : 'bg-[#FFC0B8]'}`}></div>
        </div>
        <div className="mt-12 flex h-[72px] w-[290px] items-center justify-center rounded-full bg-[#91C788] text-center text-[25px] font-semibold text-white">
          Get Started
        </div>
        <div className="mt-4 text-center text-black">
          Already Have An Account? <a href="/login" className="text-[#91C788]">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default GettingStarter;
