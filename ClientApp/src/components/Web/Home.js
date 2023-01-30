import React, { Component } from 'react';
import './Assets/Home.css';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className="image-container">
          <img id="main-image" src={require("./Media/v7_6.png")} />
          <div className="centered">Theater Laak</div>
        </div>

        <hr id="hr1"></hr>


        <div id="text-container-1">
          <h1 id="head-1"> Rondleiding </h1>
        </div>

        <div id='section-1' className='flexbox'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/image2.png")} />
          </div>
          <div className='section-block'>
            <h3>
              Wilt u alle actuele voorstellingen bekijken, klik dan op agenda.
            </h3>
            <button></button>
          </div>
        </div>

        <div id='section-2' className='flexbox'>
          <div className='section-block'>
            <h3>
              Wilt u tickets bestellen voor een voorstelling, klik dan op de tickets button om gemakkelijk naar de tickets pagina te gaan.
            </h3>
          </div>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/image3.png")} />
          </div>
        </div>

        <div id='section-3' className='flexbox'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v154_201.png")} />
          </div>
          <div className='section-block'>
            <h3>
              Wilt u een zaal huren (of meerdere zalen) voor bijvoorbeeld een evenement of een ceremonie, klik dan op de Huren button om gemakkelijk zalen en of ruimtes te kunnen huren.
            </h3>
          </div>
        </div>

        <div id='section-4' className='flexbox'>
          <div className='section-block'>
            <h3>
              Wilt u een bedrag doneren aan Laak Theater, klik dan op de knop donaties.
            </h3>
          </div>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v154_203.png")} />
          </div>
        </div>

        <div id='section-5' className='flexbox'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v154_205.png")} />
          </div>
          <div className='section-block'>
            <h3>
              Wilt u meer weten over Laak Theater, klik dan op over ons knop om naar de pagina te kunnen gaan.
            </h3>
          </div>
        </div>

        <div id='section-6' className='flexbox'>
          <div className='section-block'>
            <h3>
              Wilt u ons contacteren, klik dan op contact om een contactformulier te kunnen invullen en of contactgegevens over ons te raadplegen            </h3>
          </div>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v167_160.png")} />
          </div>
        </div>

        <div id='section-7' className='flexbox'>
          <div className='section-block'>
            <img className='section-image' src={require("./Media/v169_162.png")} />
          </div>
          <div className='section-block'>
            <h3>
              Wilt u een eigen account aanmaken of inloggen ga dan naar Mijn Laak.
            </h3>
          </div>
        </div>

      </div>
    );
  }
}
