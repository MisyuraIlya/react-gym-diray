//GLOBAL
import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

//Local
import PostForm from '../components/PostForm';
import SideBar from '../components/SideBar';
import ExersiceList from '../components/ExersiceList';


const Program = () => {

    const [exercises, setExercises] = useState([
        { id: 1, name: "Жим лежа", sets: "4", reps: "12-6" },
        { id: 2, name: "Брусья", sets: "4", reps: "12-6" },
        { id: 3, name: "Бабочка", sets: "4", reps: "12-6" }
    ])


    const createExercise = (newExercise) => {
        setExercises([...exercises, newExercise])
    }


    return (
        <div>
            <SideBar />
            <Grid columns={3} >
                <Grid.Row stretched>
                    <Grid.Column>
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
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Program;