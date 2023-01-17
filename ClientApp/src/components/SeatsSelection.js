import React, { Component } from "react";
import axios from "axios";

export class SeatsSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHall: "",
      halls: [],
      selectedSeats: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://localhost:7092/api/Hall")
      .then((response) => {
        this.setState({ halls: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleHallChange = (e) => {
    this.setState({ selectedHall: e.target.value });
  };

  handleSeatClick = (seat) => {
    if (this.state.selectedSeats.includes(seat)) {
      this.setState({
        selectedSeats: this.state.selectedSeats.filter((s) => s !== seat),
      });
    } else {
      this.setState({
        selectedSeats: [...this.state.selectedSeats, seat],
      });
    }
  };

  handleSubmit = () => {
    // Send the selected seats to the shopping cart here
    console.log("Selected seats: ", this.state.selectedSeats);
  };

  renderSeats() {
    let seats = [];
    if(this.state.selectedHall) {
    let hall = this.state.halls.find((h) => h.name === this.state.selectedHall);
    if(hall){
      for (let row = 1; row <= 3; row++) {
        let seatsPerRow = hall["thirdClassSeats"];
        if (row === 1) {
          seatsPerRow = hall["firstClassSeats"];
        } else if (row === 2) {
          seatsPerRow = hall["secondClassSeats"];
        }
        for (let seat = 1; seat <= seatsPerRow; seat++) {
          seats.push(
            <div
              key={`${row}-${seat}`}
              className={`seat ${
                this.state.selectedSeats.includes(`${row}-${seat}`)
                  ? "selected"
                  : ""
              }`}
              onClick={() => this.handleSeatClick(`${row}-${seat}`)}
            >
              {row}-{seat}
            </div>
          );
        }
      }
    }
    }
    return seats;
  }

  render() {
    return (
      <div className="seats-selection">
        <div>
          <label>
            Hall:
            <select value={this.state.selectedHall} onChange={this.handleHallChange}>
              <option value=""></option>
              {this.state.halls.map((h) => (
                <option value={h.name} key={h.name}>
                  {h.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="seats-grid-horizontal" >
          {this.state.halls
            .filter((h) => h.name === this.state.selectedHall)
            .map((hall) => (
              <div key={hall.hallId} className="seats-grid-row-horizontal">
                <div className="first-class-seats-horizontal">
                  <div className="row-label-horizontal">First Class Seats</div>
                  {[...Array(hall["firstClassSeats"])].map((seat, index) => (
                    <div
                      key={`1-${index + 1}`}
                      className={`seat ${
                        this.state.selectedSeats.includes(`1-${index + 1}`)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => this.handleSeatClick(`1-${index + 1}`)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="second-class-seats-horizontal">
                  <div className="row-label-horizontal">Second Class Seats                  </div>
                  {[...Array(hall["secondClassSeats"])].map((seat, index) => (
                    <div
                      key={`2-${index + 1}`}
                      className={`seat ${
                        this.state.selectedSeats.includes(`2-${index + 1}`)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => this.handleSeatClick(`2-${index + 1}`)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="third-class-seats-horizontal">
                  <div className="row-label-horizontal">Third Class Seats</div>
                  {[...Array(hall["thirdClassSeats"])].map((seat, index) => (
                    <div
                      key={`3-${index + 1}`}
                      className={`seat ${
                        this.state.selectedSeats.includes(`3-${index + 1}`)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => this.handleSeatClick(`3-${index + 1}`)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div>
          <button onClick={this.handleSubmit}>Add to cart</button>
        </div>
      </div>
    );
  }



}


