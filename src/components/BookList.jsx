import React from 'react'
import SingleBook from './SingleBook';
import {Container, Col, Row, Form} from 'react-bootstrap';



class BookList extends React.Component {

    state = {

        query: ''

    }

    render() {
        return (
            <Container>
                
                <Row>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Search Bookstore"
                        value={this.state.query}
                        onChange={e => this.setState({query: e.target.value})} />
                      </Form.Group>
                    </Form>
                </Row>


                <Row>
                    {
                        this.props.book.filter(books => books.title.toLowerCase().includes(this.state.query)).map(books =>(
                        <Col lg={4} md={6} sm={12}>
                        <SingleBook book={books}/>
                        </Col>
                        ))
                    };
                </Row>
            </Container>
          );
        };
};

export default BookList;