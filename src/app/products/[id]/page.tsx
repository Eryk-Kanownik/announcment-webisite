import ImageCarousel from "@/components/general/ImageCarousel";
import React from "react";

const page = () => {
  return (
    <div className="section pt-20 flex flex-col lg:grid lg:grid-cols-3 gap-2 ">
      <div className=" bg-white lg:col-span-2 h-[500px]">
        <ImageCarousel />
      </div>
      <div className="p-4 relative flex flex-col bg-gray-50 rounded-md">
        <p className="font-light text-[12px]">Added date</p>
        <h2 className="text-red-500">Car</h2>
        <p className="font-bold mb-2">
          200${" "}
          <span className="font-light text-gray-800 text-sm">
            {"("}negotiable{")"}
          </span>
        </p>
        <p className="text-sm mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          voluptate suscipit odio velit doloribus molestias illo? Illo et
          maxime, odio ab repellendus soluta omnis ratione dignissimos sint
          ipsum laboriosam. Corporis.
        </p>
        <div className=" width-[100%] lg:absolute lg:bottom-4 lg:left-4 lg:right-4 text-center  text-white flex-end font-bold p-4 bg-red-500">
          555 555 555{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
