import React from "react";
import Image from "next/image";
const AnnoucmentCard = () => {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] gap-2">
      <div className="rounded-md overflow-hidden">
        <Image
          src="https://picsum.photos/300/300"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3>Annoucment name</h3>
        <p className="text-gray-500">Added: date</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default AnnoucmentCard;
