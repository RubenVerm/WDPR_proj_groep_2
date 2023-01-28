import React, { Component } from 'react';

export class Doneer extends Component {
  state = {
    donationAmount: 0,
  }

  handleDonationAmountChange = (event) => {
    this.setState({ donationAmount: event.target.value });
  }

  handleDonationSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: JSON.stringify({ donationAmount: this.state.donationAmount }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Thank you for your donation of $${this.state.donationAmount}!`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleDonationSubmit}>
        <label>
          Donation Amount:
          <input
            type="number"
            value={this.state.donationAmount}
            onChange={this.handleDonationAmountChange}
          />
        </label>
        <button type="submit">Donate</button>
      </form>
      </div>
    );
  }
}