import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link
      href="/products/1"
      className="rounded-md overflow-hidden bg-white shadow-lg">
      <Image
        alt="product image"
        width={300}
        height={300}
        src="https://picsum.photos/300/300"
        className="object-cover w-[100%]"
      />
      <div className="p-4 relative">
        <div className="absolute top-0 left-0 h-[100%] w-[2px] bg-red-600"></div>
        <h3 className="text-red-600">Car</h3>
        <p className="font-bold text-md">Price</p>
        <p className=" font-light  text-[12px]">Location</p>
        <p className=" font-light text-[12px]">When</p>
      </div>
    </Link>
  );
};

export default ProductCard;
