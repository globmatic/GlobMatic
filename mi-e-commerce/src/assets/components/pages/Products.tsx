import React from 'react';
import ProductList from '../product/ProductList';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <header className="products-header">
        <h2>Nuestro Catálogo de Productos</h2>
        <p>Descubre nuestra selección de productos de alta calidad</p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default Products;