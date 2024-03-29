import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import {

  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Mess from './components/hostle/Mess';
import About from './components/hostle/About';
import Components from './components/Components';
import Login from './components/hostler/Login';
import Land from './components/hostler/Land';
import Firstyear from './components/hostler/Firstyear';
import SecondYear from './components/hostler/SecondYear';
import Thirdyear from './components/hostler/Thirdyear';
import Fourthyear from './components/hostler/Fourthyear';
import AdminState from './components/context/AdminState';
import Contact from './components/hostle/Contact';

function App() {
  const allow = sessionStorage.getItem("authtoken");
  return (
    <>
  <AdminState>

      <Router>
      <Navbar/>
  
        <Routes>
          <Route exact path='/' element ={<Components/>}></Route>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/admin' element={sessionStorage.getItem("token")?<Land />:<Login/>}/>
          <Route exact path='/admin/loginx' element={<Land  />}/>
          <Route exact path='/admin/login/land/firstyear' element={<Firstyear/>}/>
          <Route exact path='/admin/login/land/secondyear' element={<SecondYear/>}/>
          <Route exact path='/admin/login/land/thirdyear' element={<Thirdyear/>}/>
          <Route exact path='/admin/login/land/fourthyear' element={<Fourthyear/>}/>
        </Routes>
      </Router>

  </AdminState>
    </>
   
  );
}

export default App;
