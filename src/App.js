import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/login";
import './index.css';
function App() {
  return (
    <div className="container">
      <div id="contentContainer">
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
