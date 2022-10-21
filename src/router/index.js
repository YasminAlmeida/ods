import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '../components/header/index';
import Home from '../view/home/index';
import Resum from '../components/Resum/index';
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resum" element={<Resum />} />
      </Routes>
    </BrowserRouter>
  );
}
