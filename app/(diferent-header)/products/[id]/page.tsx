import Product from "@components/product/Product";
import { ProductResponseById } from "@products";
import React from "react";

const accessToken = process.env.ACCESS_TOKEN;
const spaceId = process.env.SPACE_ID;
const query = `
query getProductById($id: Int!) {
  productsCollection(where: {id: $id}) {
    items {
      id
      title
      kcal
      productImage {
        url
      }
      grasas
      agroEco
      hidratosDeCarbono
      ingredients {
        json 
      }
    }
  }
}`;

interface ProductResponse {
  data: {
    productsCollection: {
      items: [ProductResponseById];
    };
  };
}

const getProductById = async (id: string): Promise<ProductResponse> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master?query=${query}&variables={"id":${id}}`,
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

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <div>
      <Product product={product.data.productsCollection.items[0]} />
    </div>
  );
};

export default page;
