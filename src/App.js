import React from "react";
import styles from "./app.module.css";
import ProductList from "./components/product/ProductList";

const App = () => {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  );
};

export default App;
