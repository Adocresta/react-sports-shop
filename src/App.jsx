import React, { useContext } from "react";

// Components \\
import About from "./components/About/About";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";

// Context \\
import { CartContext } from "./context/cart-context";

const App = () => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <Header />
      <About />
      <ItemList />
      <Footer />
    </React.Fragment>
  );
};

export default App;
