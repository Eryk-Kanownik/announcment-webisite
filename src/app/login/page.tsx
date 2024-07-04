import React from "react";

const page = () => {
  return (
    <div className="section h-[100vh] flex justify-center items-center bg-gray-50">
      <div className="w-[500px] p-6 relative  rounded-md overflow-hidden bg-white shadow-md">
        <div className="w-[2px] h-[100%] absolute left-0  top-0 bg-red-500"></div>
        <h1 className="mb-6">
          <span className="text-red-500">Sign</span>In
        </h1>
        <form className="flex flex-col w-[100%]">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="mb-4" />
          <label htmlFor="password">Password</label>
          <input type="password" className="mb-6" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
