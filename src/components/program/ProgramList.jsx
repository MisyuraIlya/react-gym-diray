import React, { useState } from 'react';
import { Grid, Segment, Container, Header, Icon, Image, Divider, Sidebar, Menu, Button, Checkbox, Modal, Pagination } from 'semantic-ui-react'

//Local
import SplitProgram from './SplitProgram';
import CreateProgram from './CreateProgram';
import MyPagination from '../MyPagination';


const ProgramList = () => {
    return (
<Container>
        
                <Header as='h1' style={{display:'flex', justifyContent:'center'}}>Program Editor</Header>
                    <Container>
                        <div>
                            <CreateProgram />
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
                        </div>
                    </Container>
                    <MyPagination/>
            </Container>
    );
};

export default ProgramList;