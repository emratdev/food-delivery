import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react'

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500   ">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-8 hover:bg-fuchsia-50 transition-all duration-300
            md:w-[50vw] xl:w-[33vw] xl:h-[90vh]
            "
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt="p1"
                  width={330}
                  height={330}
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 text-center justify-center items-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl ">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">
                ${item.price.toFixed(2)}
              </span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured