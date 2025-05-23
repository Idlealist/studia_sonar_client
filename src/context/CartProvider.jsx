import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      clearCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
