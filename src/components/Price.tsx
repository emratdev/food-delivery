"use client";

import { useEffect, useState } from "react";

type Props = {
    price:number;
    id:number;
    options?: {title: string; additionalPrice: number}[]
         
    }

export const Price = ({price, options}:  Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(()=> {
        setTotal(quantity * (options ? price+options[selected].additionalPrice : price))
    },[quantity, selected, options, price])

   
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>

        {/* OPTIONS CONTAINER */}
        <div className="flex gap-4">
          {options?.map((option, index) => (
            <button
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md cursor-pointer "
              key={option.title}
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
        </div>

        {/* QUANTITY AND ADD BUTTON   CONTAINER */}
        <div className="flex justify-between items-center">
          {/* QUANTITY */}
          <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
            <span>{quantity}</span>
            <div className="flex gap-4">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                {"<"}
              </button>
              <span>1</span>
              <button
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              >
                {">"}
              </button>
            </div>
          </div>
          {/* CART BUTTON */}
          <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-5 00">
            Add to Cart
          </button>
        </div>
      </div>
    );
}