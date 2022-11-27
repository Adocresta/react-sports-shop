import React, { useContext, useState } from "react";

import Button from "./Button";
import CartModal from "./CartModal";

import logo from "./../../assets/logo.png";
import CartIcon from "./CartIcon";
import { CartContext } from "../../context/cart-context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const userCartButtonClickHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <header
      className="container mx-auto flex flex-row 
      place-content-between items-center h-20 overflow-hidden
      px-6 bg-martinique-600 shadow-header-shadow"
    >
      <img className="h-24 w-48 object-cover" src={logo} alt="Sports Shop" />
      <div className="flex flex-row ">
        <Button
          onClick={userCartButtonClickHandler}
          className="bg-martinique-400 flex justify-around items-center border-none space-x-1 py-3 px-12 hover:animate-bump active:animate-bump"
        >
          <span className="w-5 h-5 mr-2">
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className="bg-martinique-600 py-1 px-4 rounded-3xl ml-4 font-bold">
            {cartCtx.totalNumberofItems}
          </span>
        </Button>
      </div>
      {showCart ? <CartModal onClose={userCartButtonClickHandler} /> : null}
    </header>
  );
};

export default Header;
