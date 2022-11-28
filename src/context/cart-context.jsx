import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({
  newItem: {},
  cartItemList: [],
  totalNumberofItems: null,
  onNewItem: () => {},
  onDeleteItem: () => {},
});

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [newItem, setNewItem] = useState(null);
  const [totalNumberofItems, setTotalNumberofItems] = useState(0);

  const newItemHandler = (userNewItem) => {
    // add new item to cart list
    setNewItem(userNewItem);
  };

  // check newItem whenever it changes and compare it with
  // our to find if there is the same title it's add the amount
  // else it's just creates a new object and pushes it.
  useEffect(() => {
    if (newItem) {
      let foundDuplicate = false;
      cartItems.forEach((item) => {
        if (item.title === newItem.title) {
          foundDuplicate = true;
          item.amount += newItem.amount;
        }
      });
      if (!foundDuplicate) {
        setCartItems((prevState) => {
          return [...prevState, newItem];
        });
      }
    }
  }, [newItem]);

  // total number of items in the cart calculated every
  // time a new item is added
  // todo: add deletedItem as a dependency in the future
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.amount;
    });
    setTotalNumberofItems(total);
  }, [newItem, cartItems]);

  const deleteItemHandler = (deletedItem) => {
    console.log("deleting...");
    // find that item and '-=' it
  };

  return (
    <CartContext.Provider
      value={{
        // newItem: newItem,
        cartItemList: cartItems,
        totalNumberofItems: totalNumberofItems,
        onNewItem: newItemHandler,
        // onDeleteItem: deleteItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
