import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render () {
        return (
            <Card style={{border: this.state.selected ? '5px solid black' : 'none'}} 
            onClick={() => this.setSate({selected: !this.state.selected})}>
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">£{this.props.book.price}</Button>
              </Card.Body>
            </Card>
          );
    }
}

export default SingleBook;