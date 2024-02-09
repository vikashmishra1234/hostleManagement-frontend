import React from 'react';
import Navbar from './components/Navbar';
import {

  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Mess from './components/hostle/Mess';
import About from './components/hostle/About';
import Home from './components/hostle/Home';
import Components from './components/Components';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element ={<Components/>}></Route>
          <Route exact path='/mess' element={<Mess/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
