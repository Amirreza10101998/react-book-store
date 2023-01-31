import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import items from '../data/books/fantasy.json';


const RenderCard = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
          {items.map((book) =>
          <Card className='m-1' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Genre: {book.category}
            </Card.Text>
            <Button variant="primary">£{book.price}</Button>
          </Card.Body>
        </Card>
        )}
      </div>
    </div>
    );
}

export default RenderCard;


