import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map/Map';
import Home from './pages/Home/Home';

const RoutesApp = () => {

    return (

        <BrowserRouter>
            <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/map" element ={<Map />} />
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp