import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route path='home' element={<Header/>}>
            
          </Route>
        </Routes>

      </Router>
    </div>
  )
}
