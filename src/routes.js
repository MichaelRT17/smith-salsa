import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import OrderPage1 from './components/OrderPages/OrderPage1';
import OrderPage2 from './components/OrderPages/OrderPage2';
import OrderPage3 from './components/OrderPages/OrderPage3';

export default (
    <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={AboutPage} path='/about-us' />
        <Route component={OrderPage1} path='/order/1' />
        <Route component={OrderPage2} path='/order/2' />
        <Route component={OrderPage3} path='/order/3' />
    </Switch>
)