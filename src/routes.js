import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/header';
import Footer from './components/footer';


const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;