import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import itemsFantasy from '../data/books/fantasy.json';
import itemsHistory from '../data/books/history.json';
import itemsHorror from '../data/books/horror.json';
import itemsromance from '../data/books/romance.json';
import itemsscifi from '../data/books/scifi.json';




const RenderCard = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
          {itemsFantasy.map((book) =>
          <Card key={book.asin} className='m-1' style={{ width: '18rem' }}>
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

      <div className='row justify-content-center'>
          {itemsHistory.map((book) =>
          <Card key={book.asin} className='m-1' style={{ width: '18rem' }}>
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

      <div className='row justify-content-center'>
          {itemsHorror.map((book) =>
          <Card key={book.asin} className='m-1' style={{ width: '18rem' }}>
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

      <div className='row justify-content-center'>
          {itemsromance.map((book) =>
          <Card key={book.asin} className='m-1' style={{ width: '18rem' }}>
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

      <div className='row justify-content-center'>
          {itemsscifi.map((book) =>
          <Card key={book.asin} className='m-1' style={{ width: '18rem' }}>
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


