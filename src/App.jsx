
import React, { useEffect, useState } from "react";
import Navbar from "./assets/components/Navbar";
import Product from "./assets/components/Product";
import Cart from "./assets/components/Cart";



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {showModal && (
        <Cart
          cartItems={cart}
          onClose={() => setShowModal(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;






