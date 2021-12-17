import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';

import RecipePage from './pages/RecipePage';

import AboutPage from './pages/AboutPage';

function App() {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/Recipe/:id' element={<RecipePage/>} />
            <Route exact path='/About' element={<AboutPage/>} />
        </Routes>
        </BrowserRouter>
        </>

    );
}

export default App;