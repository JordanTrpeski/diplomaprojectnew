import React, { useState } from "react";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images: string[][] = [
    ["/png/Home.png", "/png/HomeFilled.png"],
    ["/png/Search.png", "/png/SearchFilled.png"],
    ["/png/Camera.png", "/png/Camera.png"],
    ["/png/Favorite.png", "/png/FavoriteFilled.png"],
    ["/png/Profile.png", "/png/Profile.png"]
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white border-t flex justify-around py-4 absolute bottom-0 left-0 w-full">
      {images.map((imagePair, index) => (
        <button
          key={index}
          className="focus:outline-none"
          onClick={() => handleImageClick(index)}
        >
          <img
            className="h-6 w-6"
            src={activeIndex === index ? imagePair[1] : imagePair[0]}
            alt={`icon-${index}`}
          />
        </button>
      ))}
    </div>
  );
};

export default Footer;
