import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export function ShowPage() {
  const [hall, setHall] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const showId= useParams().id;
  useEffect(() => {
    
    axios.get(`https://localhost:7113/api/show/${showId}`)
      .then(res => {
        const show = res.data;
        return axios.get(`https://localhost:7113/api/hall/${show.hallId}`);
      })
      .then(res => {
        const hall = res.data;
        setHall(hall);
      })
  }, [showId]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected seats: ${selectedSeats}`);
    // You can add additional code here to handle the submitted seats
    // such as making an API call to purchase the tickets, etc.
  }

  if (!hall) {
    return <div>Loading...</div>
  }
  let firstClassSeats = [];
  for (let i = 1; i <= hall.firstClassSeats; i++) {
    firstClassSeats.push({ class: 'first-class', number: i });
  }
  let secondClassSeats = [];
  for (let i = 1; i <= hall.secondClassSeats; i++) {
    secondClassSeats.push({ class: 'second-class', number: i });
  }
  let thirdClassSeats = [];
  for (let i = 1; i <= hall.thirdClassSeats; i++) {
    thirdClassSeats.push({ class: 'third-class', number: i });
  }

  return (
    <div>
      <h2>Hall Seats</h2>
      <table>
      <tr>
        <th>First Class</th>
        <td>
              {firstClassSeats.map((seat, index) => (
                <div 
                  key={index} 
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.number}
                </div>
              ))}
            </td>
      </tr>
      <tr>
        <th>Second Class</th>
        <td>
              {secondClassSeats.map((seat, index) => (
                <div 
                  key={index} 
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.number}
                </div>
              ))}
            </td>
      </tr>
      <tr>
        <th>Third Class</th>
        <td>
              {thirdClassSeats.map((seat, index) => (
                <div 
                  key={index} 
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.number}
                </div>
              ))}
            </td>
      </tr>
      </table>
      <div>Selected seats: {selectedSeats.length}</div>
      <div>Total cost: ${selectedSeats.length * 10}</div>
      <form onSubmit={handleSubmit}>
        <input 
          type="submit" 
          value="Submit" 
          disabled={selectedSeats.length === 0}
        />
      </form>
    </div>
  );
}
