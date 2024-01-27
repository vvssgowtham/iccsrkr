import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import CallForPaperCFP from './components/CallForPaperCFP';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/callforpaper" element={<CallForPaperCFP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
