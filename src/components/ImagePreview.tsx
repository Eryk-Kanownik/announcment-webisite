import React from "react";
import Image from "next/image";
const ImagePreview = () => {
  return (
    <div className="aspect-square bg-slate-50 rounded-md shadow-md overflow-hidden">
      <Image
        src="https://picsum.photos/300/300"
        alt=""
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImagePreview;
