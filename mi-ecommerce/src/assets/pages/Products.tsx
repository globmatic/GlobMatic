import ProductList from "../product/ProductList";

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
      
      <ProductList />
    </div>
  );
};

export default Products;
