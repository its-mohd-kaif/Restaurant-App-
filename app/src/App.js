import "./App.css";

import Body from "./LandingPage/Body";
import Footer from "./LandingPage/Footer";
import React from "react";

import NavigationBar from "./LandingPage/NavigationBar";
import SigninPage from "./SignupLogin/SigninPage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./SignupLogin/SignupPage";
import { createContext, useState } from "react";
import MainPage from "./MainPage/MainPage";
import Detail from "./DetailPage/Detail";
export const noteContext = createContext();
export const detailContext = createContext();

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [detail, setDetail] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ restaurant, setRestaurant }}>
        <detailContext.Provider value={{ detail, setDetail }}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="Signin" element={<SigninPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/Main" element={<MainPage />} />
            <Route path="/Detail" element={<Detail />} />
          </Routes>
          <Footer />
        </detailContext.Provider>
      </noteContext.Provider>
    </div>
  );
}

export default App;
