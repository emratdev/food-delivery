 import Image from 'next/image';
import React from 'react'
import { Countdown } from './Countdown';
import offerImage from "@/../public/offerProduct.png";
 
export const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='text-white xl:text-xl'>Progressively simplify effective Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus atque adipisci dicta. 
          Ducimus necessitatibus quas laborum ad voluptate eum repudiandae.</p>
          <Countdown/>
        <button className='bg-red-500 text-white rounded-md py-4 px-6'>Order Now</button>
      </div>
      {/* IMAGE  CONTAINER */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src={offerImage} alt='offer' fill className='object-contain' />
      </div>
    </div>
  );
}