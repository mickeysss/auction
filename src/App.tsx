import React from 'react';
import {Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import {Header} from 'components/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import {Main} from 'pages/Main';
import { Categories } from 'pages/Categories';

export const App = () => {
  return (
    <>
      <Header/>
        <div className={styles.mainContainer}>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/categories" element={<Categories/>}/>

            </Routes>
        </div>
    </>
  );
}

