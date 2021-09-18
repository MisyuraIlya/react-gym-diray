import React from 'react';
import { Container, Table, Input , Segment, Button} from 'semantic-ui-react'
import TimerCounter from '../components/TimerCounter';


const Train = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

    return (




        <div>
            <Container>
                <Segment>

                    <TimerCounter />


                    <Table celled fixed singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>1 Set</Table.HeaderCell>
                                <Table.HeaderCell>2 Set</Table.HeaderCell>
                                <Table.HeaderCell>3 Set</Table.HeaderCell>
                                <Table.HeaderCell>4 Set</Table.HeaderCell>
                                <Table.HeaderCell>5 Set</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Bench press</Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Bench press</Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Squat</Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                                <Table.Cell><Input size='mini' placeholder='Search...' /></Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Button size='big' positive style={{marginTop:'50px'}}>Done </Button>
                    </div>
                </Segment>


            </Container>

        </div>
    );
};

export default Train;