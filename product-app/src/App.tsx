import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
    </div>
  );
}

export default App;