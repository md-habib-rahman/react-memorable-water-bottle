import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import "./bottles.css";
import {
  addToStoredCart,
  getStoredCart,
  removeFromCart,
} from "../../utils/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottlesData = use(bottlesPromise);

  useEffect(() => {
    const storedCartIds = getStoredCart();

    const storedCart = [];
    for (const id of storedCartIds) {
      const cartBottle = bottlesData.find((bottle) => bottle.id === id);
      console.log(cartBottle);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);
  }, [bottlesData]);

  const handleAddToCart = (bottle) => {
    // console.log()
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log(newCart);
    //save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveCartItem = (id) => {
    console.log("remove items:", id);

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };
  return (
    <>
      <p>Added to cart: {cart.length}</p>
      <Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem}></Cart>
      <div className="bottles-card">
        {bottlesData.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
