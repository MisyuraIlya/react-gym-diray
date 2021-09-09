import React, { useState } from 'react';
import './App.css';
import ExersiceList from './components/ExersiceList';
import { Grid, Segment } from 'semantic-ui-react'
import PostForm from './components/PostForm';

function App() {
  const [exercises, setExercises] = useState([
    { id: 1, name: "Жим лежа", sets: "4", reps: "12-6" },
    { id: 2, name: "Брусья", sets: "4", reps: "12-6" },
    { id: 3, name: "Бабочка", sets: "4", reps: "12-6" }
  ])
  // const [exercises2 , setExercises2] = useState( [
  //   {id:1,name:"Становая", sets:"4", reps:"12-6"},
  //   {id:2,name:"Шраги", sets:"4", reps:"12-6"},
  //   {id:3,name:"Римский", sets:"4", reps:"12-6"}
  // ])

  // const [exercises3 , setExercises3] = useState( [
  //   {id:1,name:"Присед", sets:"4", reps:"12-6"},
  //   {id:2,name:"Жим ногами", sets:"4", reps:"12-6"},
  //   {id:3,name:"Икры", sets:"4", reps:"12-6"}
  // ])

  const createExercise = (newExercise) => {
    setExercises([...exercises, newExercise])
  }

  return (
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

  );
}

export default App;
