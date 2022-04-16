import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import {Main} from './pages/Main';

export const App = () => {
  return (
    <div className="App">

      <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    </div>
  );
}

