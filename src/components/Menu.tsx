"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import CartIcon from './CartIcon';
import { Router } from '@/configs/router.config';
import openImage from "@/../public/open.png";
import closeImage from "@/../public/close.png";

const links = [
    {id: 1, title: "HomePage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contacts", url: "/Contacts"},
]

const Menu = () => {
    
    const [open, setOpen] = useState(false); 

    const user = false
  return (
    <div className="cursor-pointer">
      {!open ? (
        <Image
          src={openImage}
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={closeImage}
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl
      z-10"
        >
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => {
                setOpen(false);
              }}
            >
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link
              href={Router.pages.login}
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </Link>
          ) : (
            <Link
              href={Router.pages.orders}
              onClick={() => {
                setOpen(false);
              }}
            >
              Orders
            </Link>
          )}

          <Link
            href={Router.pages.cart}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu 