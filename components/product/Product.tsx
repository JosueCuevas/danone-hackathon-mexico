"use client";
import { ProductResponseById } from "@products";
import { UserSettings } from "@userSettings";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaLeaf } from "react-icons/fa";

interface Props {
  product: ProductResponseById;
}

const Product: React.FC<Props> = ({ product }) => {
  const [settings, setSettings] = useState<UserSettings | null>(null);

  useEffect(() => {
    const user_settings = localStorage.getItem("userSettings");
    if (!user_settings) return;
    setSettings(JSON.parse(user_settings));
  }, []);
  return (
    <>
      {!settings ? (
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
        <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-center mt-10">
          <section className="mb-12 sm:mb-0 sm:flex sm:items-center sm:flex-col">
            <Image
              className="w-full sm:w-1/2 mb-6 inline-block"
              alt="product image"
              width={496}
              height={460}
              src={product.productImage.url}
            />
            <h3 className="text-3xl text-center mb-6 text-violetBlue font-semibold">
              {product.title}
            </h3>
            {product.agroEco && (
              <article className="flex justify-center gap-4 mb-6 items-center">
                <IconContext.Provider
                  value={{ size: "32px", className: "text-green-600  text-sm" }}
                >
                  <FaLeaf />
                </IconContext.Provider>
                <p>Este producto procede de agricultura ecológica</p>
              </article>
            )}
            <article className="flex justify-center">
              <button
                type="button"
                className="inline-block bg-violetBlue rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                Add
              </button>
            </article>
          </section>
          <section className="w-full sm:w-1/2 border border-gray-300 p-6">
            <article className="mb-6">
              <p className="text-lg text-violetBlue mb-2">Ingredientes:</p>
              <p className="text-violetBlue ">
                {product.ingredients.json.content[0].content[0].value}
              </p>
            </article>
            <article className="flex gap-8 mb-6 text-violetBlue">
              <div className="rounded-full flex flex-col justify-center items-center w-[105px] h-[105px] border border-lightBlue1 ">
                <span>Grasas</span>
                <span>{product.grasas}g</span>
              </div>
              <div className="rounded-full flex flex-col justify-center items-center w-[105px] h-[105px] border border-lightBlue1">
                <span>HC</span>
                <span>{product.hidratosDeCarbono}g</span>
              </div>
              <div className="rounded-full flex flex-col justify-center items-center w-[105px] h-[105px] border border-lightBlue1">
                <span>kcal</span>
                <span>{product.kcal}kcal</span>
              </div>
            </article>
            <article className="flex justify-center">
              <Image
                src="https://images.ctfassets.net/sbt660ufyk41/4rl60aWuvSNTxWZoGhmWvt/53284fae3876964a809b380960065342/nutri_score.png"
                alt="score"
                width={158}
                height={88}
              />
            </article>
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
