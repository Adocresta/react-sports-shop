import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart-context";

const UserCart = () => {
  // state, context, handler \\
  const [cart, setCart] = useState([]);
  const cartCtx = useContext(CartContext);
  const deleteItemHandler = (deletedItem) => {
    cartCtx.onDeleteItem(deletedItem);
  };

  // side effect that takes deleleted item as a dependency
  // every time an item got deleted we map cart list again
  useEffect(() => {
    const filteredCart = cartCtx.cartItemList.map((item) => {
      return (
        <li
          key={item.id}
          className="flex flex-row justify-between space-x-5 w-full cursor-pointer py-1 px-2 bg-slate-500 rounded-md
          hover:bg-red-600 transition-all"
          onClick={() => deleteItemHandler(item)}
        >
          <span className="space-x-2">
            <span className="border-r pr-2 border-white">{item.amount}</span>
            <span>{item.title}</span>
          </span>
          <span>
            $
            {
              // added low precision to avoid long decimal numbers
              Number((item.price * item.amount).toPrecision(5))
            }
          </span>
        </li>
      );
    });

    setCart(() => filteredCart);
  }, [cartCtx.deletedItem]);

  return (
    <ul className="flex flex-col text-white items-center justify-center space-y-1 w-60">
      {cart.length > 0 && cart}
      {cart.length === 0 && (
        <li
          className="flex flex-row justify-between space-x-5 cursor-pointer py-1 px-2 bg-slate-500 rounded-md
          hover:bg-red-600 transition-all"
        >
          There's nothing in the cart!
        </li>
      )}
    </ul>
  );
};

export default UserCart;
