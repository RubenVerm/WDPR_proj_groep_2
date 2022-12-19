import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import Attractie from './Attractie';

const AttractieLijst = () => {
  const [ loading, setLoading ] = useState(true);
  const [ attracties, setAttracties ] = useState([]);

  const handleVerwijderAttractie = (id) => {
    alert("De attractie wordt alleen clientside verwijderd. Als je het leuk vindt, dan kan je deze fout verbeteren, door de juiste API endpoint te gebruiken.");
    setAttracties(attracties.filter((a) => a.id !== id));
  };

  useEffect(async () => {
    const response = await fetch('attractie');
    const data = await response.json();
    setAttracties(data);
    setLoading(false);
  }, []);

  console.log(attracties);

  return loading ? "Laden..." : (
      <div className="attractie-list">
        {!_.isEmpty(attracties) ? (
          attracties.map((attractie) => (
            <Attractie key={attractie.id} {...attractie} handleVerwijderAttractie={handleVerwijderAttractie} />
          ))
        ) : (
          <p className="message">Er zijn nog geen attracties!</p>
        )}
      </div>
  );
};

export default AttractieLijst;
