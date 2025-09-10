import { Product } from "././types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Ver más
      </button>
    </div>
  );
};

export default ProductCard;
