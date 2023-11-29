import Link from "next/link";
import React from "react";

const ProductDetail = ({ params }: any) => {
  return (
    <div className="mx-3 bg-slate-100">
      <h2 className="text-center text-[35px] font-semibold">Product Detail</h2>

      <p className="text-center font-bold mt-10">Product {params.productId}</p>
      <Link href="/products" className="text-[14px]">
        Back To Products
      </Link>
    </div>
  );
};

export default ProductDetail;
