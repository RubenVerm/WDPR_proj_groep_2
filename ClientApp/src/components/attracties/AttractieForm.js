import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AttractieForm = (props) => {
  const [attractie, setAttractie] = useState(() => {
    return {
      naam: props.attractie ? props.attractie.naam : '',
      x: props.attractie ? props.attractie.x : '',
      y: props.attractie ? props.attractie.y : ''
    };
  });
  const { naam, x, y } = attractie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const attractie = {
      naam,
      x,
      y
    };
    props.handleOnSubmit(attractie);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAttractie((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="naam">
          <Form.Label>Naam</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="naam"
            value={naam}
            placeholder="De naam van de attractie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="x">
          <Form.Label>X</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="x"
            value={x}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="y">
          <Form.Label>Y</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="y"
            value={y}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AttractieForm;
