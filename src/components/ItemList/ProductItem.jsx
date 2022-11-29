import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { title, price, description, image } = props;
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
      // fixed default value being NaN by callback 1
      amount: orderAmount || 1,
    };

    // send the new object to cart
    cartCtx.onNewItem(newItem);
  };

  const inputChangeHandler = (e) => {
    setOrderAmount(+e.target.value);
  };

  return (
    <li
      className="container h-52 border-2 rounded-3xl overflow-hidden 
                flex flex-row space-x-5 max-w-2xl mx-auto bg-purple-200"
    >
      <div className="w-[20%] flex items-center justify-center">
        <img
          className="h-[100%] w-[100%] object-cover"
          src={image}
          alt={`${title} Image`}
        />
      </div>
      <div className="w-[60%] flex flex-col space-y-5 justify-center">
        <h1 className="font-bold text-xl border-b border-martinique-600">
          {title.toUpperCase()}
        </h1>
        <p>{description}</p>
        <p className="border w-fit bg-red-300 px-2 py-0.5 text-black font-bold text-base rounded-full">
          ${price}
        </p>
      </div>
      <form
        onSubmit={addCartHandler}
        className="relative flex flex-col justify-center items-center w-[20%]"
      >
        <div className="flex flex-col items-center space-y-2">
          <label htmlFor="amount" className="border-b border-martinique-600">
            Amount
          </label>
          <input
            className="w-1/3 text-center bg-martinique-low-opa-400
            text-white rounded-full"
            onChange={inputChangeHandler}
            type="number"
            name="amount"
            id="amount"
            defaultValue="1"
            min="1"
            max="5"
            required
          />
        </div>
        <Button
          type="submit"
          className="absolute bottom-0 right-0 -rotate-45 translate-x-9 px-9"
        >
          +Add
        </Button>
      </form>
    </li>
  );
};

export default ProductItem;
