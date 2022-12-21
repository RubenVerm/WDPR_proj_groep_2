import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { HallDatas: [], loading: true };
  }

  componentDidMount() {
    this.populateHallData();
  }

  static renderHallDatasTable(HallDatas) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {HallDatas.map(HallData =>
            <tr key={HallData.name}>
              <td>{HallData.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderHallDatasTable(this.state.HallDatas);

    return (
      <div>
        <h1 id="tabelLabel" >Hall Data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateHallData() {
    const response = await fetch("Halls");
    const data = await response.json();
    this.setState({ HallDatas: data, loading: false });
  }
}
