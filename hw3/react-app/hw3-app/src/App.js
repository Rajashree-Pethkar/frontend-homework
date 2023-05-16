import './App.css';
import React from "react";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {

  return (
    <div className="App">
        <div className='h-100'>
          <Navbar />
        </div>
    </div>
  );
}

export default App;
