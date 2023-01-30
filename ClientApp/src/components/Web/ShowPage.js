import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate   } from 'react-router-dom';
import Cookies from 'js-cookie';


const Seat = ({ seatNumber, onClick, selected }) => {
  return (
    <div
      style={{
        backgroundColor: selected ? '#ddd' : '#fff',
        border: '1px solid #333',
        width: '40px',
        height: '40px',
        display: 'inline-block',
        margin: '10px',
        cursor: 'pointer'
      }}
      onClick={() => onClick(seatNumber)}
    >
      {seatNumber}
    </div>
  );
};



export function ShowPage() {
  const [hall, setHall] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const showId = useParams().id;
  const navigate = useNavigate ();

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
      .catch(error => console.error(error));
  }, [showId]);

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleSubmit = () => {
    Cookies.set('shoppingCart', JSON.stringify(selectedSeats), { expires: 7 });
    navigate('/payment');
  };



  return (
    <div>
      <h1>{hall.name}</h1>
      <div>
        <h2>First Class Seats ({hall.firstClassSeats})</h2>
        {Array.from({ length: hall.firstClassSeats }, (_, i) => (
          <Seat
            key={`firstClassSeats-${i}`}
            seatNumber={`A.${i + 1}`}
            onClick={() => handleSeatSelection(`A${i + 1}`)}
            selected={selectedSeats.includes(`A${i + 1}`)}
          />
        ))}
      </div>
      <div>
        <h2>Second Class Seats ({hall.secondClassSeats})</h2>
        {Array.from({ length: hall.secondClassSeats }, (_, i) => (
          <Seat
          key={`secondClassSeats-${i}`}
          seatNumber={`B.${i + 1}`}
          onClick={() => handleSeatSelection(`B${i + 1}`)}
          selected={selectedSeats.includes(`B${i + 1}`)}
        />
        ))}
      </div>
      <div>
        <h2>Third Class Seats ({hall.thirdClassSeats})</h2>
        {Array.from({ length: hall.thirdClassSeats }, (_, i) => (
          <Seat
          key={`thirdClassSeats-${i}`}
          seatNumber={`C.${i + 1}`}
          onClick={() => handleSeatSelection(`C${i + 1}`)}
          selected={selectedSeats.includes(`C${i + 1}`)}
        />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}