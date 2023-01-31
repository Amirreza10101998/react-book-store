import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <div className='container-fluid'>

      <div><MyNav /></div>
      <div><Welcome /></div>
      <div><AllTheBooks/></div>
      
    </div>
    
  );
}

export default App;
