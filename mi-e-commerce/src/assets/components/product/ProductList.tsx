import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import './ProductList.css';

// Definir tipo para las props aunque esté vacío
interface ProductListProps {
  // Puedes añadir props aquí si es necesario
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
  const { products, loading, error, categories, selectedCategory, setSelectedCategory } = useProducts();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const handleCategoryClick = (category: string | null): void => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-list-container">
      <div className="category-filter">
        <h3>Categorías</h3>
        <button 
          className={!selectedCategory ? 'category-btn active' : 'category-btn'} 
          onClick={() => handleCategoryClick(null)}
        >
          Todos los productos
        </button>
        {categories.map((category: string) => (
          <button 
            key={category} 
            className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            No hay productos disponibles en esta categoría.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;