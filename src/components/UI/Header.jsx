import React, { useState } from "react";
import Button from "./Button";
import CartModal from "./CartModal";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);

  const userCartButtonClickHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div
      className="container mx-auto flex flex-row 
      place-content-between items-center h-20 overflow-hidden
      px-6 bg-martinique-600 shadow-header-shadow"
    >
      <div className="border-4 rounded-3xl">
        <img
          className="h-24 w-48 object-cover"
          src="src/assets/logo.png"
          alt="Sports Shop"
        />
      </div>
      <div>
        <Button
          onClick={userCartButtonClickHandler}
          className="bg-martinique-400"
        >
          Your Card
        </Button>
      </div>
      {showCart ? <CartModal onClose={userCartButtonClickHandler} /> : null}
    </div>
  );
};

export default Header;
