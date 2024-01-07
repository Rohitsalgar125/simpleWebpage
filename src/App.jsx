import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./view/Dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact Component={Dashboard} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
