import React, { useReducer } from "react";
import { useContext } from "react";
// import { productsData } from "../../db/products";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const initialState = [
  { title: "react.js", price: "119$", id: 1, quantity: 7 },
  { title: "vue.js", price: "109$", id: 2, quantity: 2 },
  { title: "next.js", price: "99$", id: 3, quantity: 5 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "removeHandler":
      const filterdProducts = state.filter((p) => p.id !== action.id);
      return filterdProducts;

    case "incHandler": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "changeHandler": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.e.target.value;

      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decHandler": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const fil = state.filter((p) => p.id !== action.id);
        return fil;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={dispatch}>
          {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => useContext(ProductContextDispatcher);

// const removeHandler = (id) => {
//   const filterdProducts = products.filter((p) => p.id !== id);
//   setProducts(filterdProducts);
// };

// const incHandler = (id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   product.quantity++;

//   const updatedProducts = [...products];
//   updatedProducts[index] = product;
//   setProducts(updatedProducts);
// };
// const decHandler = (id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   if (product.quantity === 1) {
//     const fil = products.filter((p) => p.id !== id);
//     setProducts(fil);
//   } else {
//     const updatedProducts = [...products];
//     product.quantity--;
//     updatedProducts[index] = product;
//     setProducts(updatedProducts);
//   }
// };

// const changeHandler = (e, id) => {
//   const index = products.findIndex((item) => item.id === id);
//   const product = { ...products[index] };
//   product.title = e.target.value;

//   const updatedProducts = [...products];
//   updatedProducts[index] = product;
//   setProducts(updatedProducts);
// };
// return { changeHandler, decHandler, incHandler, removeHandler };
