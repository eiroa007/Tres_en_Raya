import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Juegos from "./pages/Juegos/Juegos.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename='/'>
      <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home />} />
      <Route path='/Juegos'/>
    </React.StrictMode>,
);
