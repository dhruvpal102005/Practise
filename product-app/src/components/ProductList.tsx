import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

function ProductList({ searchTerm, addToCart }: { searchTerm: string; addToCart: (product: Product) => void }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
