"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [unfolded, setUnfolded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      if (e.target.innerWidth > 768) {
        setUnfolded((prev) => false);
      } else {
        setUnfolded((prev) => false);
      }
    });
  }, []);

  return (
    <nav className="px-6 py-4 bg-gray-50 md:flex md:justify-between fixed top-0 left-0 right-0 border-b-2 z-20">
      <Link href="/" className="font-extrabold cursor-pointer">
        | <span className="text-red-600">Find</span>Sell
      </Link>
      <ul
        className={`${
          unfolded
            ? "scale-y-100 max-h-[500px] mt-2"
            : "scale-y-0 max-h-[0px] mt-0"
        }    ml-2 origin-top md:scale-100 flex flex-col md:flex-row md:justify-between gap-1 md:gap-4  md:mt-0 md:ml-0`}>
        <li>
          <Link
            href="/products"
            className="navbar-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Products
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="navbar-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="navbar-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Cart
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="navbar-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Login
          </Link>
        </li>

        <li>
          <Link
            href="/register"
            className="navbar-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Register
          </Link>
        </li>
        <li className="mt-2 md:mt-0">
          <Link
            href="#"
            className="button-link"
            onClick={() => setUnfolded((prev) => !prev)}>
            Logout
          </Link>
        </li>
      </ul>
      <HiMenu
        size={20}
        className="cursor-pointer md:hidden absolute top-5 right-4"
        onClick={() => setUnfolded((prev) => !prev)}
      />
    </nav>
  );
};

export default Navbar;
