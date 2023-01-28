import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import './Assets/Huren.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


export class Huren extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    axios
      .get("https://localhost:7113/api/Show")
      .then((res) => this.setState({ shows: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const today = moment().format("YYYY-MM-DD");
    const shows = this.state.shows.filter(
      (show) => moment(show.release_date).isSameOrAfter(today)
    );

    return (
      <div>
        <div id='show-flex-container'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {shows.map((show) => (
                <tr key={show.showId}>
                  <td>{show.showName}</td>
                  <td>{show.genre}</td>
                  <td>{show.showDate}</td>
                  <td>
                    <Link to={`/show/${show.showId}`}>See Dates</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}




