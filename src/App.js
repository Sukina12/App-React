import './App.css';
import React from 'react';
import DataJson from './assets/DataJson';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import MyForm from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cornsAnimals: DataJson,
      show: false,
      info: {},
      numOfHorns: ''

    };
  }
  filterData = (event) => {
    if (this.state.numOfHorns !== 'All') {
      this.setState({
        cornsAnimals: DataJson.filter(animal => animal.horns === Number(this.state.numOfHorns))});
    }
    else{
      this.setState({
        cornsAnimals: DataJson.filter(animal => animal.horns> 0)});
    }
  }

  updateHorns = horns => this.setState({ numOfHorns: horns.target.value });

  viewBeast = (beast) => {
    this.setState({
      show: true,
      info: beast
    });
  }
  closing = () => {
    this.setState({
      show: false,
      info: {}
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MyForm filterData={this.filterData}
          numOfHorns={this.state.numOfHorns}
          updateHorns={this.updateHorns}
          cornsAnimals={this.state.cornsAnimals}/>
        <Main cornsAnimals={this.state.cornsAnimals} viewBeast={this.viewBeast} />
        <SelectedBeast show={this.state.show} info={this.state.info} closing={this.closing} />
        <Footer />

      </div>
    );
  }
}
export default App;

