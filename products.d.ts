type Ingredients = {
  nodeType: string;
  value: string;
};
type Content = {
  nodeType: "paragraph";
  data: {};
  content: Ingredients[];
};
export interface Product {
  id: string;
  kcal: number;
  title: string;
  productImage: {
    url: string;
  };
}

export interface ProductResponseById extends Product {
  grasas: number;
  agroEco: boolean;
  hidratosDeCarbono: number;
  ingredients: {
    json: {
      nodeType: string;
      data: {};
      content: Content[];
    };
  };
}
