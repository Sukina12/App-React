/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            rates:0
        };
    }
    getRates = ()=>{
        this.setState({
            rates:this.state.rates+1
        });
    }
    
    render (){
       return (
        <Card style={{ width: '30rem',margin:'3rem 37rem 3rem 37rem', color:'#0064ED' , textAlign:'center', border:'2px solid #00ADBE'}}>
        <Card.Img  src={this.props.image_url} />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Card.Text>💙
        {this.state.rates}
        </Card.Text>
        <Button onClick={this.getRates}variant="primary">Rate</Button>
        </Card.Body>
        </Card>
        );  
    }
}

export default HornedBeasts;