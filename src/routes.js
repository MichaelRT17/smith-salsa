import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

export default (
    <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={AboutPage} path='/about-us' />
    </Switch>
)