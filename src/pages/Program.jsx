//Global
import React from 'react'
import {Container, Tab} from 'semantic-ui-react'

//Local
import ProgramList from '../components/program/ProgramList';
import CreateExercise from '../components/program/CreateExercise';

// Defines
const {Pane} = Tab;

const Program = () => {
  const tab1 = {
    menuItem: 'Programs',
    render: () => <Pane><ProgramList/></Pane>
  }
  const tab2 = {
    menuItem: 'Tab 2',
    render: () => <Pane><CreateExercise/></Pane>
  }

  return <Container>
    <Tab panes={[ tab1, tab2 ]}/>
  </Container>
}

export default Program;