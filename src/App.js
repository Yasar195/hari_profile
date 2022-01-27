import React from "react";
import Land from "./pages/Land";
import './styles/globals.css';
import Home from "./pages/Home";
import Education from "./pages/Education";
import Gallery from "./pages/Gallery";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Land/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;