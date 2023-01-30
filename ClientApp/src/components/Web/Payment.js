import React, { useState } from "react";
import axios from "axios";

export const Payment = () => {
  const [formData, setFormData] = useState({
    number: "",
    reference: "",
    url: ""
  });
  const [cartItems, setCartItems] = useState([]);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { number, reference, url } = formData;
    const shoppingCart = getCookie("shoppingCart");
    console.log(shoppingCart)
    if (shoppingCart) {
      setCartItems(JSON.parse(shoppingCart));
    }
    axios
      .post(url, {
        number,
        reference,
        url
      })
      .then(response => {
        window.location.href = response.data.url;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCookie = name => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts
        .pop()
        .split(";")
        .shift();
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          placeholder="Enter account number"
          value={formData.number}
          onChange={handleChange}
        />
        <input
          type="hidden"
          name="reference"
          value={formData.reference}
        />
        <input
          type="hidden"
          name="url"
          value={formData.url}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
