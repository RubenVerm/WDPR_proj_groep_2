import React, { Component } from 'react';
import './Assets/Overons.css';
import './Assets/Home.css';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Overons extends Component {
  static displayName = Overons.name;

  render() {
    return (
      <div>

        <div className='section-flex-box'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v169_162.png")} />

          </div>
          <div className='section-block'>
            <h2> Over Laaktheater </h2>
            <hr id='hr1'></hr>
            <p>
              Laaktheater probeert kunst persoonlijk te maken. Dat betekent dat we kunst op zo veel verschillende manieren brengen dat er voor iedereen een  mogelijkheid is het zich eigen te maken en te beleven. Dat kunt niet eng is of niet voor jou, maar dat kunst echt voor en van iedereen is. Als je maar een manier vindt of krijgt die bij je past.
            </p>
          </div>
        </div>

        <div className='section-flex-box'>
          <div className='section-block'>
            <h2> Samen Programma Maken</h2>
            <hr id='hr1'></hr>
            <p>
              Laaktheater is uniek. Wij maken ons programma samen met de wijkbewoners uit Laak. Samen met mensen die hun liefde voor cultuur willen delen. Hun liefde voor film, fotografie, (jeugd)theater of muziek. Mensen met een idee kunnen gewoon binnenlopen. Wij kijken dan samen hoe we dat idee, die wens of droom waar kunnen maken.
            </p>
          </div>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v51_13.png")} />
          </div>
        </div>

        <div className='section-flex-box'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v54_19.png")} />
          </div>
          <div className='section-block'>
            <h2> Laaktheater Huren?</h2>
            <hr id='hr1'></hr>
            <p>
              Laaktheater wordt veel verhuurd vanwage de intieme sfeer en het persoonlijk contact met het publiek. Kunstenaars geven in onze studio’s individuele of groepslessen. In de foyer smeden bewoners culture plannen. En maatschappelijke organisaties en bedrijven weten de weg naar ons theater te vinden voor hun seminars, evenementen en congressen. Dus zoek je een bijzondere locatie om een cultureel evenement, vergadering, lezing of workshop te organiseren? Dan ben je in Laaktheater aan het goede adres!
            </p>
          </div>
        </div>

      </div>
    );
  }


}


