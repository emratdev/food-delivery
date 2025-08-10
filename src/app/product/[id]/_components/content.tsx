"use client";

import { Product } from "@/data"
import { toMoney } from "@/libs/utils";
import Image from "next/image";
import { useCart } from "react-use-cart";

export const Content = ({product}:Props) => {
    const {addItem, getItem, updateItemQuantity } = useCart ();
    const productCart = getItem(`${product.id}`)
    return (
      <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
        {/* IMAGE */}
        {product.img && (
          <div className="relative w-full h-1/2 md:h-[70%] ">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* TEXT */}
        <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
          <h1 className="text-3xl font-bold uppercase xl:text-4xl">
            {product.name}
          </h1>
          <p>{product.desc}</p>

          <p className="font-bold text-xl">{toMoney(product.price)}</p>

          {productCart ? (
            <div className="flex gap-5">
              <button
                type="button"
                className="block uppercase bg-red-500 text-white p-2 rounded-md"
                onClick={() =>
                  updateItemQuantity(productCart.id, productCart.quantity - 1)
                }
              >
                Minus
              </button>

              <span>{productCart.quantity}</span>

              <button
                type="button"
                className="block uppercase bg-red-500 text-white p-2 rounded-md"
                onClick={() =>
                  updateItemQuantity(productCart.id, productCart.quantity + 1)
                }
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="block uppercase bg-red-500 text-white p-2 rounded-md"
              onClick={() =>
                addItem({
                  ...product,
                  id: `${product.id}`,
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );
}


interface Props {
    product: Product;
}