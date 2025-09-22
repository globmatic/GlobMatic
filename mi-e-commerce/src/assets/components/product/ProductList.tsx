import React, { useState, useCallback } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList: React.FC = () => {
  const { products, loading, error, categories, selectedCategory, setSelectedCategory } = useProducts();

  // Estado para visor central y sliders laterales
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProductName, setSelectedProductName] = useState<string | null>(null);
  const [recentImages, setRecentImages] = useState<string[]>([]);

  const handleSelectImage = useCallback((imageUrl: string, product: { name: string }) => {
    setSelectedImage(imageUrl);
    setSelectedProductName(product.name);
    setRecentImages((prev) => {
      const next = [imageUrl, ...prev.filter((img) => img !== imageUrl)];
      return next.slice(0, 12); // mantener hasta 12 miniaturas recientes
    });
  }, []);

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

      <div className="gallery-and-grid">
        {/* Slider izquierdo */}
        <aside className="side-slider left-slider">
          <div className="thumbnails">
            {recentImages.map((img) => (
              <button key={img} className="thumb" onClick={() => setSelectedImage(img)}>
                <img src={img} alt="miniatura" />
              </button>
            ))}
          </div>
        </aside>

        {/* Visor central */}
        <section className="center-viewer">
          {selectedImage ? (
            <div className="viewer">
              <img src={selectedImage} alt={selectedProductName ?? 'imagen seleccionada'} />
              {selectedProductName && <div className="viewer-caption">{selectedProductName}</div>}
            </div>
          ) : (
            <div className="viewer placeholder">Pulsa la imagen de un producto para verla en grande</div>
          )}

          {/* Grid de productos debajo del visor */}
          <div className="products-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} onSelectImage={handleSelectImage} />
              ))
            ) : (
              <div className="no-products">
                No hay productos disponibles en esta categoría.
              </div>
            )}
          </div>
        </section>

        {/* Slider derecho */}
        <aside className="side-slider right-slider">
          <div className="thumbnails">
            {recentImages.map((img) => (
              <button key={img + '-r'} className="thumb" onClick={() => setSelectedImage(img)}>
                <img src={img} alt="miniatura" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProductList;