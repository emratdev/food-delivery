"use client";

import { Product } from "@/data";
import { toMoney } from "@/libs/utils";
import Image from "next/image";
import { Item, useCart } from "react-use-cart";

export const SelectedProducts = () => {
  const { items, removeItem, updateItemQuantity } = useCart();
  return (items as (Product & Item)[]).map((item, index) => (
    <div key={index} className="flex items-center justify-between mb-4">
      <Image src={item.img ?? ""} alt="" width={100} height={100} />
      <div>
        <h1 className="uppercase text-xl font-bold">{item.name}</h1>
        <span>Large</span>
      </div>
      <h2 className="font-bold">{toMoney(item.price)}</h2>
      <span onClick={() => removeItem(item.id)} className="cursor-pointer">
        X
      </span>
      <span
        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
        className="cursor-pointer"
      >
        -
      </span>
      <span>{item.quantity}</span>

      <span
        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
        className="cursor-pointer"
      >
        +
      </span>
    </div>
  ));
};
