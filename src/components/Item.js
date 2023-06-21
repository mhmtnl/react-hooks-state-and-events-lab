import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart ] = useState(false);

  return (
    <li className={cart ?'in-cart' : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCart(cart => !cart)} className="add">{cart ? "Remove it" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;