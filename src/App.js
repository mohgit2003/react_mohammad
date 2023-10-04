import Arr from './arr';
import './App.css';
import He from './header.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Menu from './theMenu';
import Favorit from './localstor';



function App() {
  return (
    <>
    <He />
    <Router>
    <Routes>
      <Route path='/' Component={Arr}></Route>
      <Route path='/TheMenu' Component={Menu}></Route>
      <Route path='/favorit' Component={Favorit}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
