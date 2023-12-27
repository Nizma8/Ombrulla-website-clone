import React, { useState } from 'react';

const images = [
  'https://www.ombrulla.com/burger-king.webp',
  'https://www.ombrulla.com/emirates.webp',
  'https://www.ombrulla.com/wild-leaf.webp',
  'https://www.ombrulla.com/dubai-festival-city.webp',
  'https://www.ombrulla.com/best-western.webp',
  'https://www.ombrulla.com/azelit.webp',
  'https://www.ombrulla.com/suja.webp',
  'https://www.ombrulla.com/planet-fitness.webp',
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const length = Math.ceil(images.length / 4);
  const startIdx = index * 4;
  const endIdx = startIdx + 4;
  const currentImages = images.slice(startIdx, endIdx);

  const handlePrevious = () => {
    const newIndex = (index - 1 + length) % length;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (index + 1) % length;
    setIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className=" flex overflow-hidden mt-2 ">
        {currentImages.map((image, idx) => (
          <div key={idx} className=" w-1/2">
            <img src={image} alt={`Image ${startIdx + idx + 1}`} className=" object-cover" width={"150px"}/>
          </div>
        ))}
      </div>
      <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded">
        Previous
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded">
        Next
      </button>
    </div>
  );
}

export default Carousel;
