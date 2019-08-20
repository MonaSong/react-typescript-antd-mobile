import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { routeItem } from '../models/route';

export default () => {
    <BrowserRouter>
        <Switch>
            {
                routes.map((route: routeItem, index: number) => {
                    <Route { ... route }></Route>
                })
            }
        </Switch>
    </BrowserRouter>
}