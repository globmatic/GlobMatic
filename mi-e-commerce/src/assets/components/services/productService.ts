import type { Product } from '../types/product';

// Datos de ejemplo - en una app real, estos vendrían de una API
const mockProducts: Product[] = [
  {
    id: 0,
    name: "Cámaras de Seguridad",
    description: "Cámaras de seguridad de alta calidad",
    price: 1200,
    image: "/img/DOMOTIC593/camaras/camara_bifocal2.jpg",
    category: "Tecnología",
    rating: 4.5,
    stock: 15
  },

  {
    id: 1,
    name: "Cámaras Espía",
    description: "Cámaras de seguridad de alta calidad",
    price: 35,
    image: "/img/DOMOTIC593/camaras/camara-espia.jpg",
    category: "Tecnología",
    rating: 4.5,
    stock: 15
},


  {
    id: 2,
    name: "Cámaras de Seguridad IP",
    description: "Cámaras de seguridad de última generación",
    price: 800,
    image: "/img/DOMOTIC593/camaras/camara360.jpg",
    category: "Tecnología",
    rating: 4.2,
    stock: 30
  },

  {
    id: 7,
    name: "Cámaras de Seguridad IP",
    description: "Teléfono inteligente de última generación con cámara avanzada",
    price: 900,
    image: "/img/DOMOTIC593/camaras/juego_d_6.jpg",
    category: "Tecnología",
    rating: 4.6,
    stock: 20
  },

  {
    id: 3,
    name: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido",
    price: 150,
    image: "/img/DOMOTIC593/logo1024.jpeg",
    category: "Audio",
    rating: 4.7,
    stock: 25
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Reloj inteligente con monitor de actividad física",
    price: 250,
    image: "/img/DOMOTIC593/logo1024.jpeg",
    category: "Tecnología",
    rating: 4.3,
    stock: 18
  },
  {
    id: 5,
    name: "Tablet",
    description: "Tablet de 10 pulgadas con alta resolución",
    price: 450,
    image: "/img/DOMOTIC593/logo1024.jpeg",
    category: "Tecnología",
    rating: 4.0,
    stock: 12
  },
  {
    id: 6,
    name: "Altavoz Inteligente",
    description: "Altavoz con asistente virtual integrado",
    price: 120,
    image: "/img/DOMOTIC593/logo1024.jpeg",
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