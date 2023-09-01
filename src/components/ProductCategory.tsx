import React, { FC } from "react";
import Card from "./Card";
import { ProductsProps } from "@/types";

interface ProductCategoryProps {
  data: ProductsProps[];
  category: string;
}

const ProductCategory: FC<ProductCategoryProps> = ({ data, category }) => {
  return (
    <>
      <h2 className="flex items-center justify-center text-3xl mt-5 uppercase">
        {category}
      </h2>
      <div className="flex justify-center items-center">
        <div className="m-10 mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data?.map((item: ProductsProps) => (
            <Card
              key={item?.id}
              id={item?.id}
              title={item?.title}
              price={item?.price}
              image={item?.image}
              category={item?.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
