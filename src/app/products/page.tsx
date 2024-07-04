import ProductCard from "@/components/ProductCard";
import React from "react";

const page = () => {
  return (
    <div className="section pt-20">
      <h1 className="mb-2">Search annoucments!</h1>
      <div className="mb-6">
        <form>
          <input /> <button>Hello</button>
        </form>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
