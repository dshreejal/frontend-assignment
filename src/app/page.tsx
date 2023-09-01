"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import ProductCategory from "@/components/ProductCategory";
import { ProductsProps } from "@/types";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CardSkeleton from "@/components/CardSkeleton";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const fetchdata = async (category: string) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );

  //promise to slow down the fetching
  await new Promise((resolve) => setTimeout(resolve, 50));

  const data = await res.data;
  return data;
};

export default function Home() {
  const { data: ElectronicData, isLoading } = useQuery(["electronics"], () =>
    fetchdata("electronics")
  );
  const { data: jeweleryData } = useQuery(["jewelery"], () =>
    fetchdata("jewelery")
  );
  const { data: mensClothingData } = useQuery(["men's clothing"], () =>
    fetchdata("men's clothing")
  );
  const { data: womenClothingData } = useQuery(["women's clothing"], () =>
    fetchdata("women's clothing")
  );

  if (isLoading) {
    const numberOfSkeletons = 20;
    const skeletons = Array.from({ length: numberOfSkeletons }, (_, index) => (
      <CardSkeleton key={index} />
    ));

    return (
      <>
        <Banner />
        <div className="flex justify-center items-center">
          <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {skeletons}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Banner />
      <ProductCategory data={mensClothingData} category="men's clothing" />
      <ProductCategory data={womenClothingData} category="women's clothing" />
      <ProductCategory data={ElectronicData} category="electronics" />
      <ProductCategory
        data={jeweleryData}
        category="jewelery"
      ></ProductCategory>
    </>
  );
}
