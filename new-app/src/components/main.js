/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-expressions */

import React from 'react';
import HornedBeasts from './HornedBeast';
import dataJson from '../assets/dataJson';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
      super(props);
      this.state = {
        cornsAnimals:dataJson

    };
   
  }
  render() {
    return (
     <CardColumns>
    {this.state.cornsAnimals.map(animalEl =>{
      return(
       
          <HornedBeasts 
            title={animalEl.title}
            image_url={animalEl.image_url} 
            description={animalEl.description}/>
        
      );
    })
  }
    </CardColumns>
   );
  } 
}

export default Main;