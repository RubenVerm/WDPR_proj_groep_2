import React, { Component } from 'react';


export class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:7092/api/Hall", {
            mode: 'no-cors',
            method: 'GET'
          }).then(
            (result) => {
              this.setState([result]);
      }
    );
  };
  
  render() {
    return (
      <table>
        <thead>
          <tr>
          <th>Hall ID</th>
          <th>Name</th>
          <th>First Class Seats</th>
          <th>Second Class Seats</th>
          <th>Third Class Seats</th>
          <th>Shows</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.halldId}>
            <td>{item.halldId}</td>
            <td>{item.name}</td>
            <td>{item.firstClassSeats}</td>
            <td>{item.secondClassSeats}</td>
            <td>{item.thirdClassSeats}</td>
            <td>{item.shows}</td>
          </tr>
          ))}
        </tbody>
      </table>
    );
}
}
