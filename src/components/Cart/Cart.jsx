import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCartItem }) => {
  //   console.log(cart);
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} alt="" />
          <button onClick={() => handleRemoveCartItem(bottle.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
