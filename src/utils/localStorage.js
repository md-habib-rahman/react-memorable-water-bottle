const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  cart.push(id);
  saveCartToLocalStorage(cart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storeId) => storeId !== id);
  saveCartToLocalStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoredCart,
  addItemToCartLocalStorage as addToStoredCart,
  removeFromLocalStorage as removeFromCart,
};
