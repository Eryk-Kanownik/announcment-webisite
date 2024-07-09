import AnnoucmentCard from "@/components/AnnoucmentCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="section pt-20">
      <h1>Your Announcments</h1>
      <p className="font-thin mb-10">Logged in as: Eryk_Kanownik</p>
      <Link href="/admin-panel/create-annoucment" className="button-link">
        Create new annoucment
      </Link>
      <div className="mt-4 border-2 rounded-md min-h-[65vh] p-4 flex flex-col gap-2">
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
        <AnnoucmentCard />
      </div>
    </div>
  );
};

export default page;
