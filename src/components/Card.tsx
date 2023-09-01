import React, { FC } from "react";
import { Button } from "./ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../stateManagement/slices/CartSlice";

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const Card: FC<CardProps> = ({ id, title, price, image, category }) => {
  const dispatch = useDispatch();
  const handleAdd = (data: any) => {
    dispatch(addToCart(data));
  };
  return (
    <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-white shadow-xl m-5">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={image}
          alt="product image"
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#" className="block overflow-hidden h-16">
          <h5 className="text-xl tracking-tight text-black overflow-hidden overflow-ellipsis whitespace-nowrap">
            {title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-black">${price}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => handleAdd({ id, title, price, image, category })}
            className="flex items-center justify-center gap-3 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 "
          >
            <AiOutlineShoppingCart size={20} />
            Add to cart
          </Button>
          <Button variant="link">
            <Link href={`/product/${id}`}>View</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
