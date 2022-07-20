import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((element, index) => (
          <div key={ index }>
            <PlanetCard planetName={ element.name } planetImage={ element.image } />
          </div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
