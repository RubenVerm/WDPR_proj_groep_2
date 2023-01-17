import React from "react";

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (item) => {
    this.setState({ items: [...this.state.items, item] });
  };

  removeItem = (item) => {
    this.setState({ items: this.state.items.filter((i) => i !== item) });
  };

  render() {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div>
          {this.state.items.map((item) => (
            <div key={item} className="cart-item">
              {item}
              <button onClick={() => this.removeItem(item)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

