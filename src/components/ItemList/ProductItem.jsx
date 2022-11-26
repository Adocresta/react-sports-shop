import React, { useState } from "react";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { title, price, description } = props;
  // states
  const [orderAmount, setOrderAmount] = useState();

  const addCartHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
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
            min="0"
            max="5"
          />
        </div>
        <Button type="submit">+Add</Button>
      </form>
    </li>
  );
};

export default ProductItem;
