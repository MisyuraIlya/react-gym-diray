import React, { useState } from 'react';
import { Grid, Segment, Container,Header,Icon,Image,Divider  } from 'semantic-ui-react'

import PostForm from './PostForm';
import ExersiceList from './ExersiceList';




const SplitProgram = () => {
    const [exercises, setExercises] = useState([
        { id: 1, name: "Жим лежа", sets: "4", reps: "12-6" },
        { id: 2, name: "Брусья", sets: "4", reps: "12-6" },
        { id: 3, name: "Бабочка", sets: "4", reps: "12-6" }
    ])


    const createExercise = (newExercise) => {
        setExercises([...exercises, newExercise])
    }


    return (
        <div >
            <Container>
                <Segment>
                    <Container>
                        <Grid columns={2} >
                            <Grid.Row stretched>

                                <Grid.Column>
                                    <Segment>
                                        <ExersiceList exercises={exercises} title="Day A" />
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <PostForm create={createExercise} />
                                        </div>
                                    </Segment>

                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>
                                        <ExersiceList exercises={exercises} title="Day A" />
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <PostForm create={createExercise} />
                                        </div>
                                    </Segment>

                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>
                                        <ExersiceList exercises={exercises} title="Day A" />
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <PostForm create={createExercise} />
                                        </div>
                                    </Segment>

                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>
                                        <ExersiceList exercises={exercises} title="Day A" />
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <PostForm create={createExercise} />
                                        </div>
                                    </Segment>

                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                        
                    </Container>
                </Segment>
            </Container>
        </div>
    );
};


export default SplitProgram;