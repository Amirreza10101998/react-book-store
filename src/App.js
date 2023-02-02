import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import fantasy from './data/books/fantasy.json'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'

function App() {
  return (
  
  <div> 
    <BookList book={fantasy}/>
  </div>
  
  )
}

export default App
