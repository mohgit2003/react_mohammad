import Arr from './arr';
import './App.css';
import He from './header.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Menu from './theMenu';


function App() {
  return (
    <>
    <He />
    <Router>
    <Routes>
      <Route path='/' Component={Arr}></Route>
      <Route path='/theMenu' Component={Menu}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
