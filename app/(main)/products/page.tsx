import { products } from "@/constant/dummy";
import Link from "next/link";
import React from "react";

const ProductsList = () => {
  return (
    <div className="mx-3 bg-slate-100">
      <h2 className="text-center text-[35px] font-semibold">Products List</h2>

      <ul className="ml-10 mb-2">
        {products.map((product) => (
          <li key={product.id} className="mb-3">
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
