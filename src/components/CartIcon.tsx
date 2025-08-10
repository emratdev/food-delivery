"use client"; 

import { Router } from '@/configs/router.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cartImg from "@public/cart.png"
import { useCart } from 'react-use-cart';
 
 const CartIcon = () => {
  const { totalItems } = useCart();
   return (
     <Link href={Router.pages.cart} className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src={cartImg} alt="" fill/>
        </div>
        <span>Cart ({totalItems })</span>
     </Link>
   )
 }
 
 export default CartIcon