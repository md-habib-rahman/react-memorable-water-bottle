import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { addToStoredCart } from "../../utils/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottlesData = use(bottlesPromise);
  //   console.log(bottlesData);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log(newCart);
    //save the bottle id in the storage
    addToStoredCart(bottle.id);
  };
  return (
    <>
      <p>Added to cart: {cart.length}</p>
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
