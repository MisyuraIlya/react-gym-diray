import React from 'react';
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";
import "../Home.css";


const home = () => {
    return (
        <div className="App">
            <Segment inverted vertical textAlign="center">
                <Container as="nav">
                    <Header inverted as="h1">
                        GymDiray
                    </Header>
                    <Menu borderless compact inverted>
                        <Menu.Item active>Home</Menu.Item>
                        <Menu.Item>Program</Menu.Item>
                        <Menu.Item>Diray</Menu.Item>
                        <Menu.Item>Food</Menu.Item>
                    </Menu>
                </Container>
                <Container className="content">
                    <Header inverted as="h1">
                        This App help to adhere to the training and nutrition regimen.
                    </Header>
                    <p>
                        build your training program and special exercises, and create your own diet, the ability to transfer your program to others and consult with other people
                    </p>
                    <Button size="huge">Start</Button>
                </Container>
                <Segment inverted vertical as="footer">

                    by{" Ilya misyura"}

                    .
                </Segment>
            </Segment>
        </div>
    );
};

export default home;