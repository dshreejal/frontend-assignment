"use client";
import Card from "@/components/Card";
import { ProductsProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";

const fetchdata = async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`);

  //promise to slow down the fetching
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await res.data;
  return data;
};

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading } = useQuery(["products"], () => fetchdata());

  if (isLoading) {
    return <div>loading</div>;
  }

  //show data that match the data.title and params.slug
  const filteredData = data.filter((item: any) => {
    return item.title.toLowerCase().includes(params.slug.toLowerCase());
  });

  if (filteredData.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        Product Not Found
      </div>
    );

  return (
    <div className="mt-32">
      <div className="flex justify-center items-center">
        <div className="m-10 mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredData.map((item: any) => {
            return (
              <Card
                key={item?.id}
                id={item?.id}
                title={item?.title}
                price={item?.price}
                image={item?.image}
                category={item?.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
