//GLOBAL
import React, { useState } from 'react';
import { Grid, Segment, Container, Header, Icon, Image, Divider, Sidebar, Menu, Button, Checkbox, Modal,Pagination } from 'semantic-ui-react'



//Local

import SplitProgram from '../components/SplitProgram';
import CreateProgram from '../components/CreateProgram';


const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Segment}
        animation={animation}
        direction={direction}
        visible={visible}
    >
        <Grid textAlign='center'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <SplitProgram />
        </Grid>
    </Sidebar>
)


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


const Program = () => {

    const [state, dispatch] = React.useReducer(exampleReducer, {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    })

    const { animation, dimmed, direction, visible } = state
    const vertical = direction === 'bottom' || direction === 'top'






    return (
        <div >
            <Container>
                <Segment>

                    <Container>


                        <div>

                            <Button
                                active={direction === 'top'}
                                onClick={() =>
                                    dispatch({ type: 'CHANGE_DIRECTION', direction: 'top' })
                                }
                            >
                                Top
                            </Button>
                            <Button
                                onClick={() =>
                                    dispatch({ type: 'CHANGE_ANIMATION', animation: 'push' })
                                }
                            >
                                Push
                            </Button>


                            <CreateProgram/>



                            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
                                {vertical && (
                                    <HorizontalSidebar
                                        animation={animation}
                                        direction={direction}
                                        visible={visible}
                                    />
                                )}
                                {!vertical && (
                                    <VerticalSidebar
                                        animation={animation}
                                        direction={direction}
                                        visible={visible}
                                    />
                                )}

                                <Sidebar.Pusher dimmed={dimmed && visible}>

                                    <Segment>
                                        <Segment basic>
                                            <div>
                                                <Modal
                                                    trigger={<Button positive >Edit</Button>}
                                                    header='Program Editor'
                                                    content={<SplitProgram />}
                                                    actions={['Close', { key: 'done', content: 'Done', positive: true }]}
                                                />
                                                <Header as='h2' icon textAlign='center'>
                                                    <Icon name='users' circular />
                                                    <Header.Content>Power Lifting</Header.Content>
                                                </Header>
                                                <Image
                                                    centered
                                                    size='large'
                                                    src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                                                />


                                            </div>
                                        </Segment>
                                    </Segment>

                                    <Segment>
                                        <Segment basic>
                                            <div>
                                                <Modal
                                                    trigger={<Button positive >Edit</Button>}
                                                    header='Program Editor'
                                                    content={<SplitProgram />}
                                                    actions={['Close', { key: 'done', content: 'Done', positive: true }]}
                                                />
                                                <Header as='h2' icon textAlign='center'>
                                                    <Icon name='users' circular />
                                                    <Header.Content>Power Lifting</Header.Content>
                                                </Header>
                                                <Image
                                                    centered
                                                    size='large'
                                                    src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                                                />


                                            </div>
                                        </Segment>
                                    </Segment>

                                    <Segment>
                                        <Segment basic>
                                            <div>
                                                <Modal
                                                    trigger={<Button positive >Edit</Button>}
                                                    header='Program Editor'
                                                    content={<SplitProgram />}
                                                    actions={['Close', { key: 'done', content: 'Done', positive: true }]}
                                                />
                                                <Header as='h2' icon textAlign='center'>
                                                    <Icon name='users' circular />
                                                    <Header.Content>Power Lifting</Header.Content>
                                                </Header>
                                                <Image
                                                    centered
                                                    size='large'
                                                    src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                                                />


                                            </div>
                                        </Segment>
                                    </Segment>


                                </Sidebar.Pusher>
                            </Sidebar.Pushable>
                        </div>

                    </Container>
                    <Pagination style={{display:'flex', justifyContent:'center'}}
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />

                </Segment>

            </Container>







        </div>
    );
};

export default Program;