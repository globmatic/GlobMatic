import type { Product } from '../types/product';

// Datos de ejemplo - en una app real, estos vendrían de una API
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Laptop Gaming",
    description: "Potente laptop para gaming con tarjeta gráfica dedicada",
    price: 1200,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    category: "Tecnología",
    rating: 4.5,
    stock: 15
  },

  {
    id: 1,
    name: "Cámaras Seguridad",
    description: "Cámaras de seguridad de alta calidad",
    price: 35,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    category: "Tecnología",
    rating: 4.5,
    stock: 15
},



  {
  id: 2,
  name: "Camara IP para exteriores Solar Panoramicas",
  description: `Doble lente de alta calidad Resolución 6 y 8 megapixeles Compatible con Android y iOS, Camara IP para exteriores Solar Panoramicas con resolución de 6 y 8 megapixeles, con un rango de visión de 120° y 180° para capturar la escena completa de cualquier lugar.
${"\n"}12 meses de garantía Doble lente de alta calidad.`,
  price: 75,
  image: "../assets/img/DOMOTIC593/camaras/solar.jpg",
  category: "Tecnología",
  rating: 4.2,
  stock: 30
},
  {
    id: 4,
    name: "Smartwatch",
    description: "Reloj inteligente con monitor de actividad física",
    price: 250,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Tecnología",
    rating: 4.3,
    stock: 18
  },
  {
    id: 5,
    name: "Tablet",
    description: "Tablet de 10 pulgadas con alta resolución",
    price: 450,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    category: "Tecnología",
    rating: 4.0,
    stock: 12
  },
  {
    id: 6,
    name: "Altavoz Inteligente",
    description: "Altavoz con asistente virtual integrado",
    price: 120,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    category: "Audio",
    rating: 4.4,
    stock: 22
  }
];

// Simular una llamada API con un retraso
export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000);
  });
};

export const getProductsByCategory = (category: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((product) => product.id === id);
      resolve(product);
    }, 500);
  });
};