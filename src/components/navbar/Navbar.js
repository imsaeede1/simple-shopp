import styles from "./navbar.module.css";
import { useProducts } from "../Provider/ProductProvider";

const Navbar = () => {
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  return (
    <div className={styles.nav}>
      <h4>shopping App : </h4>
      <span>{totalItems}</span>
    </div>
  );
};

export default Navbar;
