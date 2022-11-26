import React from "react";
import About from "./components/About/About";
import ItemList from "./components/ItemList/ItemList";
import Footer from "./components/UI/Footer";
// Components \\
import Header from "./components/UI/Header";

const App = () => {
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
