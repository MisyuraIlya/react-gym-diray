

import React, { Component } from 'react'
import { Input, Menu, Segment,Container } from 'semantic-ui-react'
import ProgramList from '../components/program/ProgramList';
import CreateExercise from '../components/program/CreateExercise';


export default class MenuExampleTabularOnTop extends Component {
    state = { activeItem: 'Create Program' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Container>
                    <Menu attached='top' tabular>
                        <Menu.Item
                            name='Create Program'
                            active={activeItem === 'Create Program'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Create Exercise'
                            active={activeItem === 'Create Exercise'}
                            onClick={this.handleItemClick}
                        />
 
                    </Menu>

                    <Segment attached='bottom'>
                        <ProgramList /> 
                        {/* <CreateExercise/> */}
                    </Segment>
                </Container >
            </div>

        )
    }
}
