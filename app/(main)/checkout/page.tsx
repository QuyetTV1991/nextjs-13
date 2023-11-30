import Button from "@/components/Button";
import { cartData } from "@/constant/dummy";
import React from "react";

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substring(2, 5);

  return `${timestamp}-${randomPart}`;
}

const Checkout = () => {
  const orderId = generateUniqueId();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>

      <div id="orderSummary" className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        <div id="orderItems">
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

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-semibold">Total:</p>
          <p id="totalAmount" className="text-gray-800 font-bold">
            $60.00
          </p>
        </div>
      </div>

      <form
        id="checkoutForm"
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-800 font-bold mb-2"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            rows={4}
            className="border border-gray-300 p-2 w-full"
          ></textarea>
        </div>
        <div className="flex justify-end items-center">
          <Button
            type="button"
            label="Place Order"
            route={`order/${orderId}`}
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
