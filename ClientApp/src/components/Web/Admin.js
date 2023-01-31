import React, { useState } from "react";
import axios from "axios";

export const Admin = () => {
  const [showName, setShowName] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [showDate, setShowDate] = useState("");
  const [bandId, setBandId] = useState("");
  const [hallId, setHallId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [actorId, setActorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const showData = {
      showName,
      genre,
      duration,
      showDate,
      bandId,
      hallId,
      roomId,
      actorId,
    };

    try {
      const response = await fetch("https://localhost:7113/api/show", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(showData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Show Name"
        value={showName}
        onChange={(e) => setShowName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="text"
        placeholder="Show Date"
        value={showDate}
        onChange={(e) => setShowDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Band Id"
        value={bandId}
        onChange={(e) => setBandId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Hall Id"
        value={hallId}
        onChange={(e) => setHallId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Actor Id"
        value={actorId}
        onChange={(e) => setActorId(e.target.value)}
      />
      <button type="submit">Create Show</button>
    </form>
    <HallList />
    </div>
  );
};



const HallList = () => {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState({});

  useEffect(() => {
    axios
      .get("https://localhost:7113/api/hall")
      .then(res => setHalls(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = hall => {
    setSelectedHall(hall);
  };

  const handleSave = hall => {
    axios
      .put(`https://localhost:7113/api/hall/${hall.hallId}`, {
        name: hall.name,
        firstClassSeats: hall.firstClassSeats,
        secondClassSeats: hall.secondClassSeats,
        thirdClassSeats: hall.thirdClassSeats
      })
      .then(res => {
        setHalls(
          halls.map(h =>
            h.hallId === res.data.hallId ? res.data : h
          )
        );
        setSelectedHall({});
      })
      .catch(err => console.error(err));
  };
}
  // return (
  //   <>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Hall Name</th>
  //           <th>First Class Seats</th>
  //           <th>Second Class Seats</th>
  //           <th>Third Class Seats</th>
  //           <th>Actions</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {halls.map(hall => (
  //           <tr key={hall.hallId}>
  //             <td>
  //               {selectedHall.hallId === hall.hallId ? (
  //                 <input
  //                   type="text"
  //                   value={selectedHall.name}
  //                   onChange={e =>
  //                     setSelectedHall({
  //                       ...selectedHall,
  //                       name: e.target.value
  //                     })
  //                   }
  //                 />
  //               ) : (
  //                 hall.name
  //               )}
  //             </td>
  //             <td>
  //               {selectedHall.hallId === hall.hallId ? (
  //                 <input
  //                   type="number"
  //                   value={selectedHall.firstClassSeats}
  //                   onChange={e =>
  //                     setSelectedHall({
  //                       ...selectedHall,
  //                       firstClassSeats: e.target.value
  //                     })
  //                   }
  //                 />
  //               ) : (
  //                 hall.firstClassSeats
  //               )}
  //             </td>
  //             <td>
  //               {selectedHall.hallId === hall.hallId ? (
  //                 <input
  //                   type="number"
  //                   value={selectedHall.secondClassSeats}
  //                   onChange={e =>
  //                     setSelectedHall({
  //                       ...selectedHall,
  //                       secondClassSeats: e.target.value
  //                     })
  //                   }
  //                 />
  //               ) : (
  //                 hall.secondClassSeats
  //               )}
  //             </td>
