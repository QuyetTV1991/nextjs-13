import Button from "@/components/Button";
import { cartData } from "@/constant/dummy";
import React from "react";

const Cart = () => {
  
  return (
    <div className="container mx-2 bg-slate-100">
      <h2 className="text-center font-semibold text-3xl font-spaceGrotesk mb-8">
        Shopping Cart
      </h2>

      <div className="mx-5 text-base mb-10">
        {cartData.length === 0 ? (
          <p className="text-center text-[14px]">No item in your cart</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cartData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b-2 pb-4"
              >
                <p className="text-medium">{item.product}</p>
                <p className="text-gray-800">{item.price}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-gray-800 font-bold">$60.00</p>
        </div>

        <div className="flex justify-between items-center mt-10">
          <Button type="button" label="Back to Products" route="/products" />
          <Button type="button" label="Begin Checkout" route="/checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
