import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import Donatie from './pages/Donatie';
import Huur from './pages/Huur';
import Login from './pages/Login';
import MijnLaak from './pages/MijnLaak(klant)';
import OverOns from './pages/OverOns';
import Tickets from './pages/Tickets';

const AppRoutes = () => (
  <BrowserRouter>
    <Route exact path= "/" component={Home} />
    <Route path="/Agenda" component={Agenda} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Donatie" component={Donatie} />
    <Route path="/Huur" component={Huur} />
    <Route path="/Login" component={Login} />
    <Route path="/Mijnlaak" component={MijnLaak} />
    <Route path="/OverOns" component={OverOns} />
    <Route path="/Tickets" component={Tickets} />
  </BrowserRouter>
);

export default AppRoutes;