import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pizzak from './pages/Pizzak';
import PostPizza from './pages/PostPizza';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pizzak />}></Route>
                <Route path="postpizza" element={<PostPizza />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
