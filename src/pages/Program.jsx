//GLOBAL
import React, { useState } from 'react';
import { Grid, Segment, Container, Header, Icon, Image, Divider, Sidebar, Menu, Button, Checkbox, Modal, Pagination } from 'semantic-ui-react'

//Local
import SplitProgram from '../components/program/SplitProgram';
import CreateProgram from '../components/program/CreateProgram';

const Program = () => {
    return (
        <div >
            <Container>
                <Segment>
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
                    <Pagination style={{ display: 'flex', justifyContent: 'center' }}
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