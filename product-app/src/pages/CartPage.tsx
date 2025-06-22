import { useEffect, useState } from "react";
import type { Product } from "../components/ProductList";
import Cart from "../components/Cart";

function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  return (
    <>
      <h2>Your Cart</h2>
      <Cart items={cart} />
    </>
  );
}

export default CartPage;
