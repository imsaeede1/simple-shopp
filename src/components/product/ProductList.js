import React, { Component } from "react";
import Product from "./Product";

class App extends Component {
  state = {
    products: [
      { title: "react.js", price: "119$", id: 1, quantity: 7 },
      { title: "vue.js", price: "109$", id: 2, quantity: 2 },
      { title: "next.js", price: "99$", id: 3, quantity: 5 },
    ],
  };

  deleteHandler = (id) => {
    const filterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterProduct });
  };

  incrementHandler = (id) => {
    const products = [...this.state.products];
    const findItem = products.find((p) => p.id === id);
    findItem.quantity++;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const products = [...this.state.products];
    const findItem = products.find((p) => p.id === id);
    if (findItem.quantity === 1) {
      const filterProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filterProduct });
    } else {
      findItem.quantity--;
      this.setState({ products });
    }
  };

  renderProduct = () => {
    return this.state.products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => this.deleteHandler(product.id)}
          onIncrement={() => this.incrementHandler(product.id)}
          onDecrease={() => this.decrementHandler(product.id)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {!this.state.products.length && <button>go back to shopping</button>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default App;
