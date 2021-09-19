//Global
import React from 'react';
import {Container, Segment, Header} from 'semantic-ui-react';

//Local
import GraphMonth from '../components/home/GraphMonth';
import GraphWeek from '../components/home/GraphWeek';
import StartTrain from '../components/home/StartTrain';

const home = () => {
  return (
    <Container>
      <StartTrain/>
      <Segment>
        <Header >Graph Month</Header>
        <GraphMonth/>
        <Header >Graph Week</Header>
        <GraphWeek/>
      </Segment>
    </Container>
  );
};

export default home;