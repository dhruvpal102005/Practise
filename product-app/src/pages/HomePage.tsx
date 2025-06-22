import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList, { type Product } from "../components/ProductList";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Product[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (product: Product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} addToCart={addToCart} />
    </>
  );
}

export default HomePage;
