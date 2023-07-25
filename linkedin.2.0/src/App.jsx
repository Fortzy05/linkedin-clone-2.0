import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
