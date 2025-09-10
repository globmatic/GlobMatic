import { createContext, useState, ReactNode } from "react";
import { Product } from "../types/product";

interface ProductContextProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  setProducts: () => {}
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
