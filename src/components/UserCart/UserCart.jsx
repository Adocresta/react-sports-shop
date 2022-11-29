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
          className="flex flex-row space-x-10 cursor-pointer py-1 px-2 bg-slate-500 rounded-md
          hover:bg-red-600 transition-all"
          onClick={() => deleteItemHandler(item)}
        >
          <span>
            {item.amount}x {item.title}
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
    <ul className="text-white">
      {cart.length > 0 && cart}
      {cart.length === 0 && <li>No items in the cart</li>}
    </ul>
  );
};

export default UserCart;
