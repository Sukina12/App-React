import React from 'react';
import HornedBeasts from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <CardColumns>
        {this.props.cornsAnimals.map(animalEl => {
          return (

            <HornedBeasts
              title={animalEl.title}
              image_url={animalEl.image_url}
              description={animalEl.description}
              viewBeast={this.props.viewBeast}
            />
          );
        })
        }
      </CardColumns>

    );
  }
}

export default Main;
