"use client";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BiWorld, BiCreditCard, BiShoppingBag } from "react-icons/bi";
import { ProductsProps } from "@/types";
import { VscLoading } from "react-icons/vsc";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../stateManagement/slices/CartSlice";

const fetchdata = async (id: number): Promise<ProductsProps> => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

  //promise to slow down the fetching
  await new Promise((resolve) => setTimeout(resolve, 250));

  const data: ProductsProps = await res.data;
  return data;
};

export default function Page({ params }: { params: { slug: number } }) {
  const dispatch = useDispatch();
  const handleAdd = (data: any) => {
    dispatch(addToCart(data));
  };

  const { data, error, isLoading, isFetched } = useQuery(
    ["product", params.slug],
    () => fetchdata(params.slug)
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin mx-4 text-primary text-3xl">
          <VscLoading />
        </div>
        <div className="text-primary ">Loading</div>
      </div>
    );
  }

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        Something went wrong
      </div>
    );
  if (isFetched && !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product Not Found
      </div>
    );
  }
  if (data) {
    return (
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    href="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href="/"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      Products{" "}
                    </Link>
                  </div>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <div
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {" "}
                      {data?.title}
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={data?.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {data?.title}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <Rating value={data?.rating?.rate ? data?.rating?.rate : 0} />
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {data?.rating?.count} Reviews
                </p>
              </div>

              <h2 className="mt-8 text-base text-gray-900 capitalize">
                {data?.category}
              </h2>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">$ {data?.price}</h1>
                </div>

                <Button
                  onClick={() => handleAdd({ id: data.id, title: data.title })}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow"
                >
                  <BiShoppingBag size={20} />
                  Add to cart
                </Button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <BiWorld className="text-gray mr-2" size={20} />
                  Free shipping worldwide
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <BiCreditCard className="text-gray mr-2" size={20} />
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <div className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                    {" "}
                    Description{" "}
                  </div>

                  <div className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                    Reviews
                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                      {" "}
                      {data?.rating?.count}
                    </span>
                  </div>
                </nav>
              </div>

              <div className="mt-8 flow-root sm:mt-12">
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
