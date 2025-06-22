import type { Product } from "./ProductList";

function Cart({ items }: { items: Product[] }) {
  return (
    <div>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
