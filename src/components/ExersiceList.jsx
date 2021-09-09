import React, { useState } from 'react';
import Exercise from './ProgramItem';
import {Grid,Header,Segment,Table} from 'semantic-ui-react'

const ExersiceList = ({exercises,title}) => {





    return (

                        <Grid.Row>
                        <Grid.Column>
                            <Header as='h1'>{title}</Header>
                            
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
                                        {exercises.map(exercise =>
                                        <Exercise exercise={exercise} key={exercise.id} />
                                        )}  
                                </Table.Body>
                                </Table>
      
                            </Grid.Column>
                            </Grid>
                        </Grid.Column>
                        </Grid.Row>

            

        
    );
};

export default ExersiceList;