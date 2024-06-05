import React from "react";

const InfoPageContent = () => {
  return (
    <div className="min-h-screen h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-green-600">Hello Viral,</h1>
              <p className="text-gray-500">Find, track and eat healthy food.</p>
            </div>
            <div className="my-6">
              <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-4">
                <img
                  className="h-12 w-12"
                  src="https://via.placeholder.com/50"
                  alt="fast food"
                />
                <div>
                  <h2 className="text-lg text-black font-semibold">More Statistics no clue what article maybe.</h2>
                  <button className="text-blue-500 hover:underline">Read Now</button>
                </div>
              </div>
            </div>
            <div className="my-6">
              <div className="bg-[#9E9BC7] px-4 py-2 rounded-3xl flex items-center justify-between">
                <h2 className="text-lg text-[#ffffff] font-semibold">Track Your Weekly Progress</h2>
                <button className="text-[#A3A0CA] bg-white py-[6px] rounded-xl px-7">View Now</button>
              </div>
            </div>
            <div>
              <h2 className="text-lg text-black font-semi bold mb-4">Choose Your Favorites</h2>
              <div className="flex space-x-4 overflow-x-auto">
                <div className="flex-1 text-black text-center">
                  <div className="bg-pink-100 p-4 rounded-xl">
                    <img
                      className="h-12 w-12 mx-auto"
                      src="/png/fruits.png"
                      alt="fruits"
                    />
                    <p className="mt-2">Fruits</p>
                  </div>
                </div>
                <div className="flex-1 text-black text-center">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <img
                      className="h-12 w-12 mx-auto"
                      src="/png/vegetables.png"
                      alt="vegetables"
                    />
                    <p className="mt-2">Vegetables</p>
                  </div>
                </div>
                <div className="flex-1 text-black text-center">
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <img
                      className="h-12 w-12 mx-auto"
                      src="/png/Snack.png"
                      alt="snacks"
                    />
                    <p className="mt-2">Snacks</p>
                  </div>
                </div>
                <div className="flex-1 text-black text-center">
                  <div className="bg-[#B2BEB5] p-4 rounded-xl">
                    <img
                      className="h-12 w-12 mx-auto"
                      src="/png/Meat.png"
                      alt="Meat"
                    />
                    <p className="mt-2">Meat</p>
                  </div>
                </div>
                <div className="flex-1 text-black text-center">
                  <div className="bg-blue-100 p-4 rounded-xl  ">
                    <img
                      className="h-12 w-12 mx-auto"
                      src="/png/DairyAndEggs.png"
                      alt="Dairy"
                    />
                    <p className="mt-2">Dairy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPageContent;
