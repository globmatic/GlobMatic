import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Camiseta React",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      category: "Ropa",
    },
    {
      id: 2,
      name: "Taza TypeScript",
      price: 9.99,
      image: "https://via.placeholder.com/150",
      category: "Accesorios",
    },
  ];
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Camiseta React",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      category: "Ropa",
    },
    {
      id: 2,
      name: "Taza TypeScript",
      price: 9.99,
      image: "https://via.placeholder.com/150",
      category: "Accesorios",
    },
  ];
};
// Simulación de llamada a una API

// export const fetchProducts = async (): Promise<Product[]> => {
//   const response = await fetch('https://api.example.com/products');
//   const data = await response.json();
//   return data;
// };   