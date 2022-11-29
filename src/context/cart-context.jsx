import React, { useEffect, useState } from "react";

// context data
export const CartContext = React.createContext({
  cartItemList: [],
  totalNumberofItems: null,
  onNewItem: () => {},
  onDeleteItem: () => {},
  deletedItem: false,
});

const CartContextProvider = (props) => {
  // states \\
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState(null);
  const [totalNumberofItems, setTotalNumberofItems] = useState(0);
  const [deletedItem, setDeletedItem] = useState(false);

  // handlers \\
  // adds new item to cart list
  const newItemHandler = (userNewItem) => {
    setNewItem(userNewItem);
  };

  // finds the item by checking it's name
  // decrements the item by 1
  // if it's zero deletes the item from the array
  const deleteItemHandler = (deletedItem) => {
    cartItems.forEach((item, index) => {
      if (item.title === deletedItem.title) {
        if (item.amount > 0) {
          setDeletedItem((prevState) => !prevState);
          item.amount--;
          if (item.amount === 0) {
            cartItems.splice(index, 1);
          }
        }
      }
    });
  };

  // check newItem whenever it changes and compare it with our item arary
  // to find if there is the same title it's increments the amount
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

  // total number of items in the cart calculated
  // every time a new item is added
  useEffect(
    () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.amount;
      });
      setTotalNumberofItems(total);
    } /* added deleted item as dependency to render the changes */,
    [newItem, cartItems, deletedItem]
  );

  return (
    <CartContext.Provider
      value={{
        cartItemList: cartItems,
        totalNumberofItems: totalNumberofItems,
        onNewItem: newItemHandler,
        onDeleteItem: deleteItemHandler,
        deletedItem: deletedItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
