//Global
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {Grid,Icon,Image,Menu,Segment,Sidebar,} from 'semantic-ui-react'
//Local
import Program from './pages/Program';
import { ROUTES } from './lib/enums';
import Home from './pages/Home';
import Train from './pages/Train';
import Diray from './pages/Diray';

function App() {

  const [visible, setVisible] = React.useState(false)

  return (
    <BrowserRouter>
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
              <Menu.Item style={{ display: 'flex', justifyContent: 'center' }} >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image size='mini' src='/logo.png' />
                </div>
              </Menu.Item>
              <Link to='/'>
                <Menu.Item as='a'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
              <Link to='/program'>
                <Menu.Item as='a'>
                  <Icon name='gamepad' />
                  Program
                </Menu.Item>
              </Link>
              <Link to='/diray'>
                <Menu.Item as='a'>
                  <Icon name='camera' />
                  Diray
                </Menu.Item>
              </Link>
            </Sidebar>

            <Sidebar.Pusher>

              <Menu inverted attached='top' borderless>

                <Menu.Item icon="align justify"
                  onClick={(e, data) => setVisible(true)}
                />

              </Menu>


              <Switch>

                <Route exact path={ROUTES.HOME.path}>
                  <Home />
                </Route>

                <Route exact path={ROUTES.TRAIN.path}>
                  <Train />
                </Route>

                <Route exact path={ROUTES.PROGRAM.path}>
                  <Program />
                </Route>

                <Route exact path={ROUTES.DIRAY.path}>
                  <Diray />
                </Route>




                <Route exact path={ROUTES.FOOD.path}>
                  {/* FOOD */}
                </Route>

                <Route path='/error'>
                  {/* <Error /> */}
                </Route>


                <Redirect to='/error' />

              </Switch>





            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>


    </BrowserRouter>

  );

}

export default App;
