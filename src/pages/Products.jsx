import { products } from "../data/products";

export const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <li>{product.nome}</li>
      ))}
    </div>
  );
};
