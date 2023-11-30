import { cartData } from "@/constant/dummy";
import React from "react";

const OrderDetail = ({ params }: any) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Order Confirmation
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Thank you for your order!
        </h2>

        <div id="orderItems" className="mb-4">
          <div className="text-lg font-[400] mb-6">
            Order Tracking Number -{" "}
            <span className="text-gray-500">{params.orderId}</span>
          </div>
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

        <p className="mt-8">
          Your order will be processed and shipped soon. You will receive a
          confirmation email with further details.
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
