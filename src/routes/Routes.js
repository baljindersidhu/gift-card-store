import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../components/home-page/HomePage';
import BuyCard from '../components/buy-card/BuyCard';

export default function ApplicationRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/buy/card/:cardName" component={BuyCard}></Route>
            <Redirect to="/" />
        </Switch>
    );
}