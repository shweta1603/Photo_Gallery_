import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './component/Navbar'
import PhotosFunc from './component/Photos/Photos';
import Login from './component/Login/Login'
// import Signup from './component/Login/Signup';
import SignupValidation from './component/Login/SignupValidation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/Login/About';
import Contact from './component/Login/Contact';
import NavbarForTwoComponent from './component/NavbarForTwoComponent';
import Component404 from './component/404';
import PhotoEnlarged from './component/Photos/PhotosEnlarged';
const  App =() => {
    return (
      <div className='App'>
        <Router>
        <NavbarComponent/>             {/* Navbar componentis constant or not changing */}
        {/* <NavbarForTwoComponent/> */}  
        <Routes>
          <Route path='/' element={<PhotosFunc/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<SignupValidation/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='/photos/:id' element={<PhotoEnlarged/>}/>
        {/* <PhotosFunc/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <SignupValidation/> */}

        <Route path='*' element={<Component404/>} />    {/* No-match Route. always write in last. */}
        {/* whenever compares with each route and not anyone matches it will render the no-match */}
        </Routes>
        </Router>
      </div>
    );
}

export default App;

