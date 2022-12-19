import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Attractie = ({
  id,
  naam,
  x,
  y,
  handleVerwijderAttractie
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="attractie">
      <Card.Body>
        <Card.Title className="attractie-title">{naam}</Card.Title>
        <div className="attractie-details">
          <div>x: {x}</div>
          <div>y: {y} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/pasAttractieAaan/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleVerwijderAttractie(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Attractie;
