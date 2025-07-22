import React from 'react'
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';
import Phone from "@/../public/phone.png";
import { Router } from '@/configs/router.config';

const NavBar = () => {
  const user = false

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4">
        <Link href={Router.pages.home}>Homepage</Link>
        <Link href={Router.pages.menu}>Menu</Link>
        <Link href={Router.pages.home}>Contact</Link>
      </div>
      {/* LOGO */}
      <div>
        <Link
          href={Router.pages.home}
          className="text-xl md:font-bold text-center"
        >
          Massimo
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end">
        <div className=" md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={Phone} alt="phone" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href={Router.pages.login}>Login</Link>
        ) : (
          <Link href={Router.pages.orders}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default NavBar