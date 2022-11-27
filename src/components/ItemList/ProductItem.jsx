import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { title, price, description } = props;
  // states \\
  const [orderAmount, setOrderAmount] = useState();
  const cartCtx = useContext(CartContext);

  // handlers \\
  const addCartHandler = (e) => {
    e.preventDefault();

    // create new object
    const newItem = {
      id: title + Math.random().toString(),
      title: title,
      price: price,
      amount: orderAmount,
    };

    // send the new object to cart
    cartCtx.onNewItem(newItem);
  };

  const inputChangeHandler = (e) => {
    setOrderAmount(+e.target.value);
  };

  return (
    <li className="container flex justify-around space-x-5">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <form onSubmit={addCartHandler} className="flex flex-col">
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            name="amount"
            id="amount"
            min="1"
            max="5"
            required
          />
        </div>
        <Button type="submit">+Add</Button>
      </form>
    </li>
  );
};

export default ProductItem;
