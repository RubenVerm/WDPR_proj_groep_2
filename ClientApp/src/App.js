import { Route } from 'react-router';
import React, { useState } from 'react';
import { Home } from './components/Home';
import { Switch } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';
import Suggestie from './components/suggesties/Suggestie';
import AttractieLijst from './components/attracties/AttractieLijst';
import VoegAttractieToe from './components/attracties/VoegAttractieToe';

import './custom.css'

const App = (props) => {
    return (
      <div>
        <NavMenu />
      <div>
        <div className="main-content">
          <Switch>
            <Route component={Suggestie} path="/suggestie" />
            <Route component={AttractieLijst} path="/attracties" />
            <Route component={VoegAttractieToe} path="/attractieToevoegen" />
            <Route component={(props) => (<div>Deze pagina bestaat nog niet. Het is leerzaam deze pagina te maken.</div>)} path="/pasAttractieAaan" />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
      </div>
    );
}

export default App;