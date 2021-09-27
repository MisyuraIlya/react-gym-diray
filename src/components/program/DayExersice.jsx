import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import {
  Grid,
  Segment,
  Container,
  Button,
  Table,
  Header
} from 'semantic-ui-react'
// Local
import api from '../../lib/api';
import PostForm from './PostForm';
import dataExercise from './ProgramExercises'

const DayExersice = ({programId}) => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);

  async function loadExercises() {
    setLoading(true);
    try {
      // Fix pagination here
      const {data} = await api.fetchProgramExerisice(programId);
      setExercises(data)
    } catch(error) {
      // TODO! Fix me!
      console.log('Found some error', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => loadExercises(), []);

  const addNewDay = async () => {
    await api.addProgramExersiceDay(programId)
    await loadExercises();
  }

  const deleteExersice = async (programId, index, id) => {
    await api.deleteExersiceDay(programId, index, id)
    await loadExercises();
  }

  return (
    <Container>

      <Button content="add new day" positive onClick={addNewDay}/>
      <Segment>
        <Container>
          <Grid columns={2}>
            <Grid.Row stretched>
              {exercises.map((exercise, index) => <Grid.Column>
                <Segment>
                  <Grid.Row>
                    <Grid.Column>
                      <Header>Day: {index + 1}</Header>
                      <Grid columns={2}>
                        <Grid.Column width={16}>
                          <Table celled structured>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell rowSpan='2'>Упражнения</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>Сеты</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>Повторение</Table.HeaderCell>
                                <Table.HeaderCell rowSpan='2'>Опции</Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>
                            {exercise.map(({id, name, sets, repetitions}) => <Table.Body>
                              <Table.Row>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell textAlign='center'>{sets}</Table.Cell>
                                <Table.Cell textAlign='center'>{repetitions}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                  <Button negative onClick={() => deleteExersice(programId, index, id)}>Delete</Button>
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>)}
                          </Table>

                        </Grid.Column>
                      </Grid>
                      <PostForm programId={programId} exersiceId={index} onSuccess={() => loadExercises()}/>

                    </Grid.Column>
                  </Grid.Row>
                </Segment>

              </Grid.Column>)}

            </Grid.Row>
          </Grid>

        </Container>
      </Segment>
    </Container>
  );
};

export default DayExersice;