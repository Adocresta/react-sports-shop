import React from "react";
import ProductItem from "./ProductItem";

// mock data \\
const itemData = [
  {
    id: "m1",
    title: "T-Shirt",
    description:
      "a short-sleeved casual top, generally made of cotton, having the shape of a T when spread out flat.",
    image:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1403&q=80",
    price: 19.99,
  },
  {
    id: "m2",
    title: "Football",
    description:
      "a ball used in football, either round (as in soccer) or oval (as in rugby and American football) and typically made of leather or plastic and filled with compressed air.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 24.99,
  },
  {
    id: "m3",
    title: "golf club",
    description:
      "a club used to hit the ball in golf, with a heavy wooden or metal head on a slender shaft.",
    image:
      "https://images.unsplash.com/photo-1593111774642-a746f5006b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80",
    price: 199.9,
  },
  {
    id: "m4",
    title: "baseball bat ",
    description:
      "smooth wooden or metal club used in the sport of baseball to hit the ball after it is thrown by the pitcher.",
    image:
      "https://images.unsplash.com/photo-1620740527696-4867da637855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    price: 9.99,
  },
];

const ItemList = () => {
  const items = itemData.map((item) => (
    <ProductItem
      key={item.id}
      image={item.image}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <div className="container flex flex-col space-y-5 mx-auto items-center justify-center bg-purple-100 -mt-9 h-fit">
      <h2 className="mt-10 text-2xl font-bold">Products</h2>
      <ul className="">{items}</ul>
    </div>
  );
};

export default ItemList;
