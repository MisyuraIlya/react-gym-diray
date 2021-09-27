//Global
import React from 'react';
import {Grid, Header, Table} from 'semantic-ui-react'
//Local
import Exercise from './ProgramItem';

const ExersiceList = ({exercises, title, remove}) => {

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
                  <Table.HeaderCell rowSpan='2'>Опции</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {exercises.map(exercise => <Exercise remove={remove} exercise={exercise} key={exercise.id}/>)}
              </Table.Body>
            </Table>

          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  );
};

export default ExersiceList;