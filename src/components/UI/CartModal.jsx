import React from "react";
import ReactDOM from "react-dom";
// Components
import UserCart from "../UserCart/UserCart";
import Button from "./Button";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-[#000000bf]"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className="fixed top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 
    z-50 max-w-sm overflow-hidden py-6 px-16 bg-slate-400 rounded-2xl
   border-martinique-600 border-8 border-dotted flex flex-col justify-center items-center space-y-5"
    >
      <UserCart />
      <Button
        onClick={props.onClose}
        className="bg-slate-800 cursor-pointer hover:bg-slate-400"
      >
        Close
      </Button>
    </div>
  );
};

const CartModal = (props) => {
  return (
    // creates portal to render somewhere else rather that where it's called
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export default CartModal;
