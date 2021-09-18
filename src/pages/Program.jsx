

import React, { Component } from 'react'
import { Input, Menu, Segment,Container,Tab } from 'semantic-ui-react'
import ProgramList from '../components/program/ProgramList';
import CreateExercise from '../components/program/CreateExercise';


const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane><ProgramList /> </Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane><CreateExercise/></Tab.Pane> },
  ]


const Program = () =>  <Container><Tab panes={panes}/></Container>


export default Program;