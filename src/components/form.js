import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HornedBeasts from './HornedBeast';

class MyForm extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  update = horns => this.props.updateHorns(horns);
  submitForm = (event) => {
    event.preventDefault();
    this.props.filterData(event);
    return (
      <div>
        <HornedBeasts
          title={this.props.title}
          image_url={this.props.image_url}
          description={this.props.description}
          viewBeast={this.props.viewBeast}/>
      </div>
    );
  }

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Group controlId="filterHorns">
          <Form.Label> How Many Horns ? </Form.Label>
          <br />
          <br />
          <Form.Control onChange={this.update} name="horns" as="select" defaultValue={'All'}>
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Control>
          <br />
          <br />
          <Button variant="primary" type="submit">
            Filter By HornsNumber
          </Button>
        </Form.Group>
      </Form>

    );
  }
}

export default MyForm;
