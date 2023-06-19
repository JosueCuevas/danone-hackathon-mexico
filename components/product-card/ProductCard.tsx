import { Product } from "@products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
  action: string;
}

const ProductCard: React.FC<Props> = ({ product, action }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[345px] h-[428px] relative">
      <Link href={`/products/${product.id}`} className="flex justify-center">
        <Image
          className="rounded-t-lg inline-block"
          src={product.productImage.url}
          alt="Product Image"
          width={250}
          height={100}
        />
      </Link>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {product.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600">{product.kcal} kcal</p>
        <button
          type="button"
          className="inline-block absolute bottom-[5%] bg-violetBlue rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          {action}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
