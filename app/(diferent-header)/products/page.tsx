import Products from "@components/products/Products";
import { Product } from "@products";
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
    <div>
      <Products products={products.data.productsCollection.items} />
    </div>
  );
};

export default page;
