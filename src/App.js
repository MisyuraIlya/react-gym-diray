//Global
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Local
import './App.css';
import Program from './pages/Program';
import { ROUTES } from './lib/enums';
import Home from './pages/Home';

function App() {


  return (

    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
