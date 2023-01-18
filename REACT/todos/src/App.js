import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Contacts from './components';

function App() {
  return (
    
    <div>
      <div className='head'><h1>Contact List</h1></div>
      <Contacts/>
    </div>
  );
}

export default App;
