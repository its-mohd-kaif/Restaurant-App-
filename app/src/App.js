
import './App.css';

import Body from './LandingPage/Body';
import Footer from './LandingPage/Footer';
import React from 'react';

import NavigationBar from './LandingPage/NavigationBar';
import SigninPage from './SignupLogin/SigninPage';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      {/* <NavigationBar/>
      <Body/>
      <Footer/>
      <SigninPage/> */}
      <NavigationBar/>
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="signin" element={<SigninPage />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
