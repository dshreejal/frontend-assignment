"use client";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import {
  changeQuantity,
  removeFromCart,
} from "../stateManagement/slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const CartCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (event: any) => {
    event.preventDefault();
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    dispatch(changeQuantity({ id: product.id, quantity: newQuantity }));
  };

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
    toast.success("Item removed from cart");
  };
  return (
    <div>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={product?.image}
          alt="product-image"
          className="w-20 h-20 object-cover rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {product?.title}
            </h2>
            <p className="mt-1 text-xs text-gray-700 capitalize">
              Category: {product?.category}
            </p>
          </div>

          <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-sm">
                Quantity:{" "}
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="15"
                defaultValue="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="text-sm border border-gray-300 rounded-md w-16 text-center"
              />
              <p className="text-sm">$ {product?.price}</p>
              <button>
                <BsTrash
                  onClick={() => handleRemove(product?.id)}
                  className="cursor-pointer duration-150 hover:text-red-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
