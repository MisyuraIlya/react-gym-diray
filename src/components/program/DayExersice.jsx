import React from 'react';
import {useState} from 'react/cjs/react.development';
import {
  Grid,
  Segment,
  Container,
  Button,
  Table,
  Header
} from 'semantic-ui-react'
import PostForm from './PostForm';
import dataExercise from './ProgramExercises'
const DayExersice = ({days}) => {

  let arr = [];
  for (let i = 0; i < days; i++) {
    arr.push({id: i, day: i})
  }
  const [day,
    setDay] = useState(arr)

  let lastelement = day[day.length - 1]
  const addNewDay = () => {

    setDay([
      ...day, {
        id: lastelement.id + 1,
        day: lastelement.day + 1
      }
    ])

  }

  return (
    <Container>

      <Button content="add new day" positive onClick={addNewDay}/>

      <Segment>
        <Container>
          <Grid columns={2}>
            <Grid.Row stretched>
              {day.map(list => <Grid.Column>
                <Segment>
                  <Grid.Row>
                    <Grid.Column>
                      <Header>Day: {list.day + 1}</Header>
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
                            {/* {console.log(dataExercise)} */}
                            {/* {console.log(dataExercise[list.day])} */}
                            {dataExercise[list.day]
                              ? dataExercise[list.day].map(e => <Table.Body>
                                <Table.Row>
                                  <Table.Cell>{e.name}</Table.Cell>
                                  <Table.Cell textAlign='center'>{e.sets}</Table.Cell>
                                  <Table.Cell textAlign='center'>{e.reps}</Table.Cell>
                                  <Table.Cell textAlign='center'>
                                    <Button negative>Delete</Button>
                                  </Table.Cell>
                                </Table.Row>
                              </Table.Body>)
                              : null}
                          </Table>

                        </Grid.Column>
                      </Grid>

                    </Grid.Column>
                  </Grid.Row>
                  <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {/* <PostForm/> */}
                  </div>
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