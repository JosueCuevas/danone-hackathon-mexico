import ProductCard from "@components/product-card/ProductCard";
import UserSettings from "@components/user-settings/UserSettings";
import { Product } from "@products";
import Image from "next/image";
import React from "react";

interface ProductResponse {
  data: {
    productsCollection: {
      items: Product[];
    };
  };
}
const accessToken = process.env.ACCESS_TOKEN;
const spaceId = process.env.SPACE_ID;
const query = `
query getProducts{
   productsCollection{
    items { 
      id
      productImage{
        url
      }
      kcal
      title
    }
  }
}
`;

const getProducts = async (): Promise<ProductResponse> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?query=${query}`,
    {
      next: { revalidate: 10 },
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const products: ProductResponse = await res.json();
  return products;
};

const page = async () => {
  const products = await getProducts();
  return (
    <div className="mb-7">
      <h1 className="mt-7 mb-11 text-lightBlue1 text-4xl sm:text-6xl text-center font-bold">
        Welcome to your diary!
      </h1>
      <section className="flex flex-col sm:gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <section className="mb-12">
            <article className="flex flex-col items-center">
              <Image
                src={"/avatar.png"}
                alt="avatar"
                width={195}
                height={195}
                className="mb-4"
              />
              <h2 className="text-center font-bold text-5xl text-darkBlue2">
                Username
              </h2>
              <p className="text-center">hola@example.com</p>
            </article>
          </section>
          <section className="p-6 border border-lightBlue2">
            <p className="p-3 bg-lightBlue4 text-darkBlue1">
              Your maximum kcal limit
            </p>
            <UserSettings />
          </section>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="flex flex-wrap justify-around gap-2">
            {products.data.productsCollection.items.map((product) => (
              <ProductCard key={product.id} product={product} action="Delete" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
