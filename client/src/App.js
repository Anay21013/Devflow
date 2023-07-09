import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Auth' element={<Auth/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
