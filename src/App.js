import './App.css';
import React from 'react';
import DataJson from './assets/DataJson';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cornsAnimals: DataJson,
      show: false,
      info: {}

    };
  }
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
        <Main cornsAnimals={this.state.cornsAnimals} viewBeast={this.viewBeast} />
        <SelectedBeast show={this.state.show} info={this.state.info} closing={this.closing}/>
        <Footer />

      </div>
    );
  }
}
export default App;

