import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import RestrictedRoute from './components/RestrictedRoute';
import { createBrowserHistory } from 'history';

import Landing from "./components/Landing";
import App from "./components/App";
import Attractions from "./components/Attractions";
import Profile from "./components/Profile";
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Switch>
        <Route path="/" exact component={ Landing } pageName="Landing"  />
        <Route path="/auth" exact component={ App } />
          {/*<Route path="/places" exact component={ Products } pageName="Places" />*/}
        <Route path="/places/:id" component={ Attractions } pageName="Attractions" />
        <RestrictedRoute path="/profile" exact component={Profile} pageName="Profile" />
        {/*
        <RestrictedRoute path="/users" exact component={ Users } roles={ [ROLES.SUPER_ADMIN] } pageName={ PAGES.USERS.TITLES.LIST } />
        <RestrictedRoute path="/users/edit/:id" exact component={ EditUser } roles={ [ROLES.SUPER_ADMIN] } pageName={ PAGES.USERS.TITLES.EDIT } />
        <RestrictedRoute path="/users/create" exact component={ EditUser } roles={ [ROLES.SUPER_ADMIN] } pageName={ PAGES.USERS.TITLES.CREATE } />
        <RestrictedRoute path="/product/create" exact component={ EditBrand } roles={ [ROLES.SUPER_ADMIN] } pageName={ PAGES.BRANDS.TITLES.CREATE } />
        */    }
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
