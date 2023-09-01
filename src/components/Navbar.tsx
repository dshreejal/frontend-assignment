"use client";
import React, { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { RootState } from "@/stateManagement/store";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const cart = useSelector((state: RootState) => {
    return state.cart;
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    router.push(`/search/${event.target.value}`);
  };

  return (
    <header className="text-slate-700 w-full fixed z-50 bg-white mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center shadow-2xl top-0">
      <Link
        href="/"
        className="flex items-center whitespace-nowrap text-2xl font-black text-primary"
      >
        <span className=" w-8">
          <BiStore />
        </span>
        OnlineStore
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row lg:py-2"
      >
        <Input
          type="text"
          placeholder="Search"
          className="w-2/3 ml-1"
          value={searchValue} // Step 4: Set input value from state
          onChange={handleInputChange}
        />
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <Link
            href="/cart"
            className="text-black px-4 py-2 cursor-pointer  pl-4 flex  gap-1 items-center justify-center hover:text-primary hover:scale-110 active:text-primary-foreground "
          >
            {" "}
            <AiOutlineShoppingCart /> Cart
            <span className="text-white relative bottom-3 bg-primary rounded-lg px-1 py text-sm">
              {cart.length}
            </span>
          </Link>
          <Button className="whitespace-nowrap rounded-xl  px-5 py-3 font-medium text-white transition-all duration-200 ">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
