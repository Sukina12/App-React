import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: 0
    };
  }
  getRates = () => {
    this.setState({
      rates: this.state.rates + 1
    });
  }
  display=() => {
    this.props.viewBeast(this.props);
    this.setState({
      rates: this.state.rates + 1 });
  }


  render() {
    return (
      <div>
        <Card style={{ width: '22rem', color: '#0064ED', textAlign: 'center', border: '2px solid #00ADBE' }}>
          <Card.Img onClick={this.display} style={{ width: '20rem', height: '20rem' }} src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>💙{this.state.rates}</Card.Text>
            <Button onClick={this.getRates} variant="primary">Rate</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
