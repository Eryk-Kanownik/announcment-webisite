import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <div className="h-[100vh] section-hero flex justify-center items-center border-b-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-2">
            <span className="text-red-600">Find</span>Sell
          </h1>
          <p className="font-medium mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptate harum ipsum enim temporibus labore maiores itaque sequi
            praesentium sapiente. Magnam nam expedita in aliquam nobis
            exercitationem perspiciatis deleniti necessitatibus.
          </p>
          <div className="flex gap-2">
            <button>Discounts</button>
            <button>Latest</button>
          </div>
        </div>
      </div>
      <div className="section bg-gray-50">
        <h2 className="mb-2">Added lately</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
