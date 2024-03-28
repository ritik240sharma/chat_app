import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter } from "react-router-dom"
import { AuthContextfunction } from './context/Auth_context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
