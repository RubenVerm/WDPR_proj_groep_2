import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Pretpark Den Haag</h1>
        <p>Dit is de website van het pretpark Den Haag. </p>
      </div>
    );
  }
}

export default Home;