import React from 'react';


export class Dontaties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Shows: []
    }
}
  
  componentDidMount() {
    fetch("https://localhost:7113/api/Show")
    .then(res => res.json())
    .then(
        (shows) => {
            this.setState({ Shows: shows });
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
          <th>Naam Voorstelling</th>
          <th>Soort Voorstelling</th>
          <th>Datum</th>
          <th>Band</th>
          <th>Genre</th>
          <th>Hall</th>
          <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Shows.map(item => (
            <tr key={item.showId} className='active-row'>
            <td>{item.showName}</td>
            <td>{item.typeShow}</td>
            <td>{item.showDate}</td>
            <td>{item.Band}</td>
            <td>{item.genre}</td>
            <td>{item.Hall}</td>
            <td>{item.Room}</td>
          </tr>
          ))}
        </tbody>
      </table>
  
    );
}
}