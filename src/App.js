import './App.css';
import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';
import tachyons from "tachyons";


function App() {
  return (
    <Router>
      <div>
        <div className="App">
          {/* <header className="App-header">
            <h1>WELCOME TO THE CALENDAR APP</h1>
            <Link to="/signin" style={{color: '#ee9ca7', textDecoration: 'none', padding: '10px'}}>Sign in</Link>
            <Link to="/signup" style={{color: '#ee9ca7', textDecoration: 'none', padding: '10px'}}>Sign up</Link>
            <Link to="/calendar" style={{color: '#ee9ca7', textDecoration: 'none', padding: '10px'}}>Calendar</Link>
          </header> */}
        <Outlet />
        </div>
          <Routes>
          <Route index element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calendar" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;