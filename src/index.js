import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {BrowserRouter as Router, HashRouter, Route,} from "react-router-dom"

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


const app = document.getElementById('app');

render(
    <div>
        <Header/>
        <Router history={HashRouter}>
            <Route path="/" component={HomePage} />
        </Router>
        <Footer />
    </div>
    , app);
