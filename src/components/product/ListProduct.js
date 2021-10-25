// import React, { useState } from "react";
// import Product from "./Product";

// const ProductList = () => {
//   const [products, setProducts] = useState([
//     { title: "react.js", price: "119$", id: 1, quantity: 7 },
//     { title: "vue.js", price: "109$", id: 2, quantity: 2 },
//     { title: "next.js", price: "99$", id: 3, quantity: 5 },
//   ]);

//   const deleteHandler = (id) => {
//     const filter = products.filter((p) => p.id !== id);
//     setProducts(filter);
//   };

//   const incrementHandler = (id) => {
//     const products = { ...products };
//     const indexProduct = products.find((p) => p.id === id);
//     indexProduct.quantity++;
//     setProducts(products);
//   };

//   return (
//     <div>
//       {products.map((product) => {
//         return (
//           <Product
//             product={product}
//             key={product.id}
//             onDelete={() => deleteHandler(product.id)}
//             onIncrement={() => incrementHandler(product.id)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default ProductList;

// class ProList extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     console.log("ListProducts.js componentDidUpdate");
//   }
//   renderProduct = () => {
//     const { onChange, onInc, onDecrease, onDelete, products } = this.props;
//     if (products.length === 0) return <div>this is no product in card</div>;

//     return products.map((product, index) => {
//       console.log("ListProducts.js render");
//       return (
//         <Product
//           product={product}
//           key={index}
//           onDelete={() => onDelete(product.id)}
//           onInc={() => onInc(product.id)}
//           onDecrease={() => onDecrease(product.id)}
//           onChange={(e) => onChange(e, product.id)}
//         />
//       );
//     });
//   };

//   render() {
//     const { products } = this.props;
//     return (
//       <div className="container" id="title">
//         {!products.length && (
//           <div>
//             <button>go to shopping</button>
//           </div>
//         )}
//         {this.renderProduct()}
//       </div>
//     );
//   }
// }

//   return (
//     <>
