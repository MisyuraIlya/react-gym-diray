//  Global
import React from 'react';
import {Table} from 'semantic-ui-react'

const exercise = (props) => {




    return (
    <Table.Row>
        <Table.Cell>{props.exercise.name}</Table.Cell>
        <Table.Cell textAlign='center'>{props.exercise.sets}</Table.Cell>
        <Table.Cell textAlign='center'>{props.exercise.reps}</Table.Cell>
    </Table.Row>                              
    );
};

export default exercise;













{/* <Grid columns={3} divided>   
<Grid.Row stretched>   
    <Grid.Column>
    </Grid.Column>
        <Grid.Column>
            <Segment>
                <Grid.Row>
                <Grid.Column>
                    <Header as='h1'>Tables</Header>
                    
                    <Grid columns={2}>
                    <Grid.Column width={16}>
                        <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell rowSpan='2'>Упражнения</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='2'>Сеты</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='2'>Повторение</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                            <Table.Cell>{props.exercise.name}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.sets}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.reps}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                            <Table.Cell>{props.exercise.name}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.sets}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.reps}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                            <Table.Cell>{props.exercise.name}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.sets}</Table.Cell>
                            <Table.Cell textAlign='center'>{props.exercise.reps}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                        </Table>
                    </Grid.Column>
                    </Grid>
                </Grid.Column>
                </Grid.Row>
            </Segment>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
</Grid.Row>
</Grid> */}