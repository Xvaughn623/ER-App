import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
