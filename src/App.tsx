import React from 'react';
import styles from './App.module.css';

import {Route, Routes, Navigate} from 'react-router-dom';
import { MainPage } from './pages/Main/Main';
import { TodoListPage } from './pages/TodoList/TodoList';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.appWrapper}>      
      <Navbar />
      <Routes>
        <Route path="/main" element={<MainPage />} /> 
        <Route path="/todolist" element={<TodoListPage />} /> 
        <Route path="/" element={<Navigate to='/main' />} /> 
      </Routes>
    </div>
  );
}

export default App;
