import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pizzak from './pages/Pizzak';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="pizzak" element={<Pizzak />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
