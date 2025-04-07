import React from "react";
import "./bottle.css";

const Bottle = ({ bottle,handleAddToCart }) => {
  const { name, img, price, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Name:{name}</h3>
      <div className="sub-card">
        <h2>${price}</h2>
        <p>{stock} Remaining</p>
      </div>
	  <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
