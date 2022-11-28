import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { id, title, price, description, image } = props;
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
    <li className="container flex justify-around space-x-3 w-[70%] mx-auto">
      <div className="h-14 w-14 flex items-center justify-center ">
        <img className="rounded-full" src={image} alt={`${title} Image`} />
      </div>
      <div className="w-1/2">
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
