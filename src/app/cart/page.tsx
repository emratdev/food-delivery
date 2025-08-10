import React from "react";
import { SelectedProducts } from "./_components/selected-products";
import { Payment } from "./_components/payment";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 xl:flex-row ">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4  flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <SelectedProducts />
      </div>

      {/* PAYMENT CONTAINER */}
      <Payment/> 
    </div>
  );
};

export default CartPage;
