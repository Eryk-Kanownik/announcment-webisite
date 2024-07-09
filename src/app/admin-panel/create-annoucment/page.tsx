import ImagePreview from "@/components/ImagePreview";
import React from "react";

const page = () => {
  return (
    <div className="section pt-20">
      <h1>Create Annoucment</h1>
      <form className="flex flex-col mt-6">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className="mb-4" />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" className="mb-4" />
        <label htmlFor="negotiable">Negotiable</label>
        <input type="checkbox" id="negotiable" className="mb-4 self-start" />
        <div className="border-2 rounded-md mb-4">
          <div>
            <label htmlFor="files">
              <h4 className=" bg-slate-50 border-b-2 p-4 font-bold">
                Upload images {"("}max 9{")"}
              </h4>{" "}
            </label>
            <input type="file" id="files" className=" hidden " />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
            <ImagePreview />
          </div>
        </div>
        <label htmlFor="description">Description</label>
        <textarea id="description" className="mb-4 resize-none" rows={5} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
