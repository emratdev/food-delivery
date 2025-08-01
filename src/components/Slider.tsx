"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import slide1Image from "@/../public/slide1.png";
import slide2Image from "@/../public/slide2.png";
import slide3Image from "@/../public/slide3.jpg";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: slide1Image
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: slide2Image
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: slide3Image
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50  ">
      {/* TEXT CONTAINER */}

      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-5xl">{data [currentSlide].title}</h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-md mb-4">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}

      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt="slider"
          fill
          className="object-cover"
        ></Image>
      </div>
    </div>  
  );
}

export default Slider