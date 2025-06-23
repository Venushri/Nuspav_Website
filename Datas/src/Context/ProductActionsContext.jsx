import React, { createContext, useContext, useState } from 'react';

const ProductActionsContext = createContext();

export function ProductActionsProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleWishlist = (product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleAddToCart = (product) => {
    setCart((prev) =>
      prev.includes(product.id)
        ? prev
        : [...prev, product.id]
    );
  };

  return (
    <ProductActionsContext.Provider value={{ wishlist, cart, handleWishlist, handleAddToCart }}>
      {children}
    </ProductActionsContext.Provider>
  );
}

export function useProductActions() {
  return useContext(ProductActionsContext);
}