import Banner from "@/components/Banner";
import Card from "@/components/Card";
import ProductCategory from "@/components/ProductCategory";
import { ProductsProps } from "@/types";
import Image from "next/image";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const fetchdata = async (category: string) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  //add a promise to slow the data fetching
  await new Promise((resolve) => setTimeout(resolve, 250));

  const data = await res.json();
  return data;
};

export default async function Home() {
  const ElectronicData = await fetchdata("electronics");
  const jeweleryData = await fetchdata("jewelery");
  const mensClothingData = await fetchdata("men's clothing");
  const womenClothingData = await fetchdata("women's clothing");

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
