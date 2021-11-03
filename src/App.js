import React from "react";
import styles from "./app.module.css";
import ProductList from "./components/product/ProductList";

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Shop</h2>
      <ProductList />
    </div>
  );
};

export default App;
