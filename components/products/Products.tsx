"use client";
import ProductCard from "@components/product-card/ProductCard";
import { Product } from "@products";
import { UserSettings } from "@userSettings";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  const [limit, setLimit] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const settings = localStorage.getItem("userSettings");
    if (!settings) return;
    let limit: UserSettings = JSON.parse(settings);
    setLimit(limit.daily_kcal);
  }, []);

  return (
    <>
      {!limit ? (
        <div className="flex justify-center items-center flex-col my-20">
          <p>You have not set a limit yet</p>
          <p>Please set a limit and then return to choose your products</p>
          <Link
            href={"/daily-calorie-settings"}
            className="mt-8 text-violetBlue hover:text-vividCerulean"
          >
            Click here
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-semibold my-8 text-darkBlue2 text-center">
            Choose all products under the limit you set
          </h2>
          <span>Daily Limit: {limit}kcal </span>
          <div className="sm:flex sm:justify-end my-8">
            <div className="relative mb-4 flex flex-wrap items-stretch">
              <span
                className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 cursor-pointer"
                id="basic-addon1"
              >
                <IconContext.Provider value={{ size: "24px" }}>
                  <AiOutlineSearch />
                </IconContext.Provider>
              </span>
              <input
                type="text"
                className="relative m-0 block w-[1px] sm:min-w-[400px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                placeholder="Search Product..."
                aria-label="Search Product..."
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-around gap-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} action="Add" />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
