"use client";
import React from 'react'
import Image from 'next/image'

const Menu = () => {
    
    const [open, setOpen] = React.useState(false); 
  return (
    <div className='cursor-pointer'>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={()=>setOpen(true)}
        />
      ) : (
        <Image
          src="/open.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={()=>setOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu 