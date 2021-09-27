//Global
import React, {useState} from 'react';
import {Grid, Segment, Container, Button} from 'semantic-ui-react'
//Local
import PostForm from './PostForm';
import ExersiceList from './ExersiceList';

const SplitProgram = () => {
  const [exercisesA,
    setExercisesA] = useState([
    {
      id: 1,
      name: "A",
      sets: "4",
      reps: "12-6"
    }, {
      id: 2,
      name: "B",
      sets: "4",
      reps: "12-6"
    }, {
      id: 3,
      name: "C",
      sets: "4",
      reps: "12-6"
    }
  ])

  const [exercisesB,
    setExercisesB] = useState([
    {
      id: 1,
      name: "D",
      sets: "4",
      reps: "12-6"
    }, {
      id: 2,
      name: "E",
      sets: "4",
      reps: "12-6"
    }, {
      id: 3,
      name: "F",
      sets: "4",
      reps: "12-6"
    }
  ])

  const [exercisesC,
    setExercisesC] = useState([
    {
      id: 1,
      name: "G",
      sets: "4",
      reps: "12-6"
    }, {
      id: 2,
      name: "H",
      sets: "4",
      reps: "12-6"
    }, {
      id: 3,
      name: "K",
      sets: "4",
      reps: "12-6"
    }
  ])

  const [exercisesD,
    setExercisesD] = useState([
    {
      id: 1,
      name: "L",
      sets: "4",
      reps: "12-6"
    }, {
      id: 2,
      name: "M",
      sets: "4",
      reps: "12-6"
    }, {
      id: 3,
      name: "Y",
      sets: "4",
      reps: "12-6"
    }
  ])

  const createExerciseA = (newExercise) => {
    setExercisesA([
      ...exercisesA,
      newExercise
    ])
  }
  const createExerciseB = (newExercise) => {
    setExercisesB([
      ...exercisesB,
      newExercise
    ])
  }

  const createExerciseC = (newExercise) => {
    setExercisesC([
      ...exercisesC,
      newExercise
    ])
  }

  const createExerciseD = (newExercise) => {
    setExercisesD([
      ...exercisesD,
      newExercise
    ])
  }

  const removeExercise = (exercise) => {
    setExercisesA(exercisesA.filter(e => e.id !== exercise.id))
  }
  return (
    <div >
      <Container>
        <Button content="add new day" positive/>

        <Segment>
          <Container>
            <Grid columns={2}>
              <Grid.Row stretched>

                <Grid.Column>
                  <Segment>
                    <ExersiceList remove={removeExercise} exercises={exercisesA} title="Day A"/>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                      <PostForm create={createExerciseA}/>
                    </div>
                  </Segment>

                </Grid.Column>

                <Grid.Column>
                  <Segment>
                    <ExersiceList exercises={exercisesB} title="Day B"/>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                      <PostForm create={createExerciseB}/>
                    </div>
                  </Segment>

                </Grid.Column>

                <Grid.Column>
                  <Segment>
                    <ExersiceList exercises={exercisesC} title="Day C"/>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                      <PostForm create={createExerciseC}/>
                    </div>
                  </Segment>

                </Grid.Column>

                <Grid.Column>
                  <Segment>
                    <ExersiceList exercises={exercisesD} title="Day D"/>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                      <PostForm create={createExerciseD}/>
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