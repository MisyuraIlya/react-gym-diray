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
  Container,
  Dropdown,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
} from 'semantic-ui-react'
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
    <Menu.Item style={{display:'flex', justifyContent:'center'}} >
      <div style={{display:'flex', justifyContent:'center'}}>
      <Image size='mini' src='/logo.png'  />
      </div>
      </Menu.Item>
    <Menu.Item as='a' onClick={(e) => {
              e.preventDefault();
              window.location.href='http://localhost:3000/';
              }}>
      <Icon name='home'  />
      Home
    </Menu.Item>
    <Menu.Item as='a' onClick={(e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/program';
        }}>
      <Icon name='gamepad' />
      Program
    </Menu.Item>
    <Menu.Item as='a' onClick={(e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/diray';
        }}>
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

      <Menu inverted attached='top' borderless>
          <Menu.Item icon="align justify"           onClick={() =>
            dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' })
          }></Menu.Item>
        <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      </Menu>
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
