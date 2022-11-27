import React from "react";
import ProductItem from "./ProductItem";

const ItemList = () => {
  return (
    <div className="container flex flex-col space-y-5 mx-auto items-center justify-center bg-purple-100 -mt-9 h-96">
      <h2>Products</h2>
      <ul>
        <ProductItem title="T-Shirt" description="test" price="59" />
      </ul>
    </div>
  );
};

export default ItemList;
