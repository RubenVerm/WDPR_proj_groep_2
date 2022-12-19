import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Suggestie = (props) => {
  const [suggestie, setSuggestie] = useState("");
  const [positie, setPositie] = useState([0, 0]);

  return (
    <div className="main-form">
      Vul hier je huidige positie in om een suggestie te krijgen van een
      attractie.
      <Form
        onSubmit={async (event) => {
          event.preventDefault();
          setSuggestie(await (await fetch("suggestie/" + positie[0] + "/" + positie[1])).text());
        }}
      >
        <Form.Group controlId="x">
          <Form.Label>X</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="x"
            value={positie[0]}
            onChange={(e) =>
              setPositie((prevState) => ([ e.target.value, prevState[1] ]))
            }
          />
        </Form.Group>
        <Form.Group controlId="y">
          <Form.Label>Y</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="y"
            value={positie[1]}
            onChange={(e) =>
              setPositie((prevState) => ([ prevState[0], e.target.value ]))
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Geef een suggestie!
        </Button>
      </Form>
      <p>{suggestie}</p>
    </div>
  );
};

export default Suggestie;
