import React from 'react';


export class Donaties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Halls: []
    }
}
  
  componentDidMount() {
    fetch("https://localhost:7113/api/Hall")
    .then(res => res.json())
    .then(
        (halls) => {
            this.setState({ Halls: halls });
        },
        (error) => {
            alert(error);
        }
    )
}
  render() {
    return (
      <table className='styled-table'>
        <thead>
          <tr>         
          <th>Zaalnummer</th>
          <th>Voorstellingen</th>
          <th>Eersterangs stoelen</th>
          <th>Tweederangs stoelen</th>
          <th>Derderangs stoelen</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Halls.map(item => (
            <tr key={item.halldId} className='active-row'>
            <td>{item.name}</td>
            <td>{item.shows}</td>
            <td>{item.firstClassSeats}</td>
            <td>{item.secondClassSeats}</td>
            <td>{item.thirdClassSeats}</td>
          </tr>
          ))}
        </tbody>
      </table>
    );
}
}