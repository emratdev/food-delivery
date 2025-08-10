"use client";

import { toMoney } from "@/libs/utils";
import { useCart } from "react-use-cart";

export const Payment = () => {
    const { cartTotal, totalItems } = useCart();
    return (
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ( {totalItems} items)</span>
          <span>{toMoney(cartTotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.0 0</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500 uppercase">Free </span>
        </div>

        <div className="flex justify-between">
          <span className="uppercase">Total(Incl, vat)</span>
          <span className="uppercase font-bold">{toMoney(cartTotal)} </span>
        </div>
        <hr className="my-2" />
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    );
}