//Global
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Local
import './App.css';
import Program from './pages/Program';
import { ROUTES } from './lib/enums';
import Home from './pages/Home';
import Train from './pages/Train';

import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Diray from './pages/Diray';










function App() {


  const [visible, setVisible] = React.useState(false)




  return (






    <Grid columns={1}>


    <Grid.Column>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>


    
          <Menu>


          <Menu.Item icon="align justify"
           onClick={(e, data) =>  console.log("clicked") }
          />
                <Checkbox
        onClick={(e, data) => setVisible(data.checked)}
      />

      </Menu>

      <BrowserRouter>
        <Switch>

          <Route exact path={ROUTES.HOME.path}>
            <Home />
          </Route>

          <Route exact path={ROUTES.TRAIN.path}>
            <Train/>
          </Route>

          <Route exact path={ROUTES.PROGRAM.path}>
            <Program />
          </Route>

          <Route exact path={ROUTES.DIRAY.path}>
            <Diray/>
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



      </Sidebar.Pusher>
      </Sidebar.Pushable>
      </Grid.Column>
      </Grid>




  );
  
}

export default App;
