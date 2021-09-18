import React from 'react';
import { Container, Grid, Segment, Header, Button, Image } from 'semantic-ui-react';
import GraphMonth from '../components/home/GraphMonth';
import GraphWeek from '../components/home/GraphWeek';
import StartTrain from '../components/home/StartTrain';
import "../Home.css";


const home = () => {
    return (
        <Container>
            <StartTrain />
            <Segment>
                <Header >Graph Month</Header>
                <GraphMonth />
                <Header >Graph Week</Header>
                <GraphWeek />
            </Segment>
        </Container>
    );
};

export default home;