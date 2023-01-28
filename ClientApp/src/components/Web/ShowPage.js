import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export function ShowPage() {
  const [tickets, setTickets] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    // Retrieve available tickets from the API
    axios.get("https://localhost:7113/api/tickets").then(response => {
      setTickets(response.data);
    });
  }, []);

  function handleAddToCart(ticket) {
    // Add the selected ticket to the shopping cart
    setShoppingCart([...shoppingCart, ticket]);
  }

  function handleRemoveFromCart(ticket) {
    // Remove the selected ticket from the shopping cart
    setShoppingCart(shoppingCart.filter(t => t.TicketId !== ticket.TicketId));
  }

  return (
    <div>
      <h2>Available Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.TicketId}>
            {ticket.ShowDate} - {ticket.Price}
            <button onClick={() => handleAddToCart(ticket)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCart.map(ticket => (
          <li key={ticket.TicketId}>
            {ticket.ShowDate} - {ticket.Price}
            <button onClick={() => handleRemoveFromCart(ticket)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Total Price: {shoppingCart.reduce((acc, cur) => acc + cur.Price, 0)}</h3>
    </div>
  );
}

