import React from 'react';

export class Agenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Bands: []
    }
}
  
  componentDidMount() {
    fetch("https://localhost:7113/api/band")
    .then(res => res.json())
    .then(
        (bands) => {
            this.setState({ Bands: bands });
        },
        (error) => {
            alert(error);
        }
    )
}
  render() {
    return (
      <div>
      <table className='styled-table'>
        <thead>
          <tr>         
          <th>Band naam</th>
          <th>Genre</th>
          <th>Voorstellingen</th>
          <th>bandMembers</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Bands.map(item => (
            <tr key={item.bandId} className='active-row'>
            <td>{item.name}</td>
            <td>{item.genre}</td>
            <td>{item.shows}</td>
            <td>{item.bandMembers}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
}
}