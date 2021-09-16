//Global
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Local
import './App.css';
import Program from './pages/Program';
import { ROUTES } from './lib/enums';
import Home from './pages/Home';
import Train from './pages/Train';

import {
  Button,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
} from 'semantic-ui-react'
import Navbar from './components/Navbar';
import Diray from './pages/Diray';






const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item >
      <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Project Name
      </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Program
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Diray
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='food' />
      Food
    </Menu.Item>
  </Sidebar>
)

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed }
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false }
    default:
      throw new Error()
  }
}





function App() {




  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  })

  const { animation, dimmed, direction, visible } = state
  const vertical = direction === 'bottom'




  return (




    <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>

      {!vertical && (
        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
        />
      )}

      <Sidebar.Pusher dimmed={dimmed && visible}>

        <Navbar />
        <Button
          onClick={() =>
            dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' })
          }
        >

          Push
        </Button>
      </Sidebar.Pusher>



    
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


    </Sidebar.Pushable>


  );
}

export default App;
