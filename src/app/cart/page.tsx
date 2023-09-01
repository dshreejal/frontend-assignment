"use client";

import React, { FC } from "react";
import CartCard from "@/components/CartCard";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/stateManagement/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EmptyCart from "../../assets/emptycart.png";
import { clearCart } from "../../stateManagement/slices/CartSlice";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => {
    return state.cart;
  });

  let subTotal = 0;
  product.forEach((item) => {
    const itemTotal = item.quantity * item.price;
    subTotal += itemTotal;
  });

  subTotal = Number(subTotal.toFixed(2));
  let shippingPrice = subTotal * 0.01;
  shippingPrice = Number(shippingPrice.toFixed(2));

  let total = subTotal + shippingPrice;
  total = Number(total.toFixed(2));

  return (
    <div className="pt-28 bg-secondary-100 min-h-screen">
      <h1 className="mb-12 text-center text-2xl font-bold text-primary-100">
        Cart Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {product.length === 0 ? (
            <div className="text-center mt-6 text-red-600">
              <div className="flex items-center justify-center">
                <Image
                  height="300"
                  width="300"
                  alt="Cart"
                  src={EmptyCart.src}
                />
              </div>
              <div>
                You cart is empty{" "}
                <Link className="text-xl text-rose-600 font-bold" href="/">
                  Go Home
                </Link>
              </div>
            </div>
          ) : (
            product.map((card) => <CartCard key={card.id} product={card} />)
          )}
        </div>

        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              $ {subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Delivery</p>
            <p className="text-gray-700">
              $ {shippingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                $ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          {product.length ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(clearCart());
              }}
              className="mt-6 w-full rounded-md  py-1.5 font-medium text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Check out
            </Button>
          ) : (
            <div className="text-center mt-6 text-red-600">
              Cart is empty. Cannot process checkout.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
