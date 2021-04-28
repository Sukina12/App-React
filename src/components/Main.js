/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-expressions */

import React from 'react';
import HornedBeasts from './HornedBeast';
import DataJson from '../assets/DataJson';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cornsAnimals: DataJson

    };

  }
  render() {
    return (
      <CardColumns>
        {this.state.cornsAnimals.map(animalEl => {
          return (

            <HornedBeasts
              title={animalEl.title}
              image_url={animalEl.image_url}
              description={animalEl.description} />

          );
        })
        }
      </CardColumns>
    );
  }
}

export default Main;
