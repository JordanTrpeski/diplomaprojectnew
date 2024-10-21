import { useState } from 'react';

interface FoodItem {
  name: string;
  calories: number;
  quantity: number;
  editable: boolean;
}

function FoodTracker() {
  const [activeTab, setActiveTab] = useState<string>('Foods');

  const [foodList, setFoodList] = useState<FoodItem[]>([
    { name: 'Add Food/Drink', calories: 0, quantity: 100, editable: false }
  ]);

  const tabs = [
    { name: 'Foods', key: 'Foods' },
    { name: 'Favorites', key: 'Favorites' },
    { name: 'Dishes', key: 'Dishes' },
  ];

  const addFood = () => {
    setFoodList([...foodList, { name: 'Add Food/Drink', calories: 0, quantity: 100, editable: false }]);
  };

  const updateQuantity = (index: number, value: number) => {
    const newFoodList = [...foodList];
    newFoodList[index].quantity = value;
    setFoodList(newFoodList);
  };

  const updateCalories = (index: number, value: number) => {
    const newFoodList = [...foodList];
    newFoodList[index].calories = value;
    setFoodList(newFoodList);
  };

  // Calculate total calories
  const totalCalories = foodList.reduce((total, food) => total + food.calories, 0);

  return (
    <div className="b h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">

        <a href='/homepage' >
        <div className="bg-gray-200 rounded-full p-2">
          <img className="w-6 h-6" src="/svg/left.svg" alt="left" />
        </div>
        </a>
        <div className="flex justify-center items-center">
          <div className="text-[#000000] text-[18px] font-semibold mr-2">Breakfast</div>
          <div className='text-gray-400 text-[12px] font-regular'>{totalCalories} kcal</div>
        </div>
        <div className="bg-gray-200 rounded-full p-2">
          <img className="w-6 h-6" src="/svg/plus.svg" alt="plus" />
        </div>
      </div>

      <div className='mx-4'>
        <div className="relative w-full h-12 rounded-lg focus-within:shadow-lg bg-white">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="pl-10 h-full w-full text-sm bg-[#F2F5FC] rounded-lg text-gray-700 focus:outline-none"
            type="text"
            id="search"
            placeholder="Search something.." />
        </div>
      </div>
      <div className="flex space-x-4 justify-center bg-[#ffffff] p-4 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg ${activeTab === tab.key
              ? 'bg-gradient-to-b from-[#9FE860] to-[#50CE3B] text-white'
              : 'bg-transparent text-gray-400'
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto relative">
        <div className="bg-white pb-20"> 
          {foodList.map((food, index) => (
            <div key={index} className="flex justify-between items-center mx-4 bg-white rounded-xl shadow-md p-4 mt-1">
              <div className="flex items-center flex-grow">
                <div className="relative border rounded-lg border-gray-300 px-4 py-2 text-gray-500 text-sm flex items-center">
                  <input
                    type="number"
                    value={food.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 0)}
                    className="w-12 bg-transparent text-center"
                  />
                  <span className="ml-2">g</span>
                </div>
                <div className="flex-grow ml-2">
                  <input
                    className='font-semibold text-[16px] bg-transparent text-gray-900 w-full'
                    value={food.name}
                    onChange={(e) => setFoodList((prev) => {
                      const n = structuredClone(prev);
                      n[index].name = e.target.value;
                      return n;
                    })}
                  />
                  <div className="flex items-center mt-1">
                    <input
                      type="number"
                      value={food.calories}
                      onChange={(e) => updateCalories(index, parseInt(e.target.value) || 0)}
                      className="w-12 bg-transparent text-black text-center text-sm border rounded-lg border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-400">kcal</span>
                  </div>
                </div>
              </div>
              <div
                className="text-white text-[22px] font-bold from-[#9FE860] bg-gradient-to-r to-[#50CE3B] p-1 rounded-full cursor-pointer"
                onClick={addFood}
              >
                <img className="w-5 h-5" src="/svg/plus.svg" alt="Plus" />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className='fixed bottom-0 left-0 right-0 mb-4 align-bottom justify-center items-center bg-white text-center mx-16'>
        <div className='w-full h-full bg-gradient-to-b py-1 text-[18px] from-[#9FE860] rounded-xl to-[#50CE3B]'>
          Add to breakfast
        </div>
      </div>
    </div>
  );
}

export default FoodTracker;
