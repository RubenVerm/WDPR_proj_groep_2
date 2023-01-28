import React, { useState } from 'react';
import axios from 'axios';

export const AdminPageShow = () => {
  const [show, setShow] = useState({
    ShowName: '',
    Genre: '',
    Duration: '',
    ShowDate: '',
    BandId: '',
    HallId: '',
    RoomId: '',
    ActorId: ''
  });

  const handleChange = event => {
    setShow({ ...show, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('https://localhost:7113/api/shows', show)
      .then(response => {
        console.log(response);
        alert('Show created successfully!');
      })
      .catch(error => {
        console.log(error);
        alert('Error creating show');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Show Name:
        <input
          type="text"
          name="ShowName"
          value={show.ShowName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          name="Genre"
          value={show.Genre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          type="number"
          name="Duration"
          value={show.Duration}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Show Date:
        <input
          type="date"
          name="ShowDate"
          value={show.ShowDate}
          onChange={handleChange}
          required pattern="\d{2}-\d{2}-\d{4}"
        />
      </label>
      <br />
      <label>
        Band ID:
        <input
          type="number"
          name="BandId"
          value={show.BandId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hall ID:
        <input
          type="number"
          name="HallId"
          value={show.HallId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Room ID:
        <input
          type="number"
          name="RoomId"
          value={show.RoomId}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Actor ID:
        <input
          type="number"
          name="ActorId"
          value={show.ActorId}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Create Show</button>
    </form>
    );
  }




