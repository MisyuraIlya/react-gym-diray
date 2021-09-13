import React from 'react';
import { ROUTES } from '../lib/enums';
import SidebarExampleTransitions from '../pages/SidebarExampleTransitions';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Program from '../pages/Program'

const Router = () => {
    return (
        <div>
                <SidebarExampleTransitions/>
      <Switch> 

        <Route exact path={ROUTES.HOME.path}>
          <Home/>
        </Route>

        <Route exact path={ROUTES.PROGRAM.path}>
          <Program />
        </Route>

        <Route exact path={ROUTES.DIRAY.path}>
          {/* DIARY */}
        </Route>

        <Route exact path={ROUTES.FOOD.path}>
          {/* FOOD */}
        </Route>

        <Route path='/error'>
          {/* <Error /> */}
        </Route>

        <Redirect to='/error' />

      </Switch>
        </div>
    );
};

export default Router;