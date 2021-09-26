import React from 'react';
import {
  Grid,
  Segment,
  Container,
  Button,
  Table,
  Header
} from 'semantic-ui-react'
const ExercisesList = ({exercise}) => {
  return (
       <Table.Body>
           {exercise.map(e =>
        <Table.Row>
          <Table.Cell>{e.name}</Table.Cell>
          <Table.Cell textAlign='center'>{e.sets}</Table.Cell>
          <Table.Cell textAlign='center'>{e.reps}</Table.Cell>
          <Table.Cell textAlign='center'>
            <Button negative>Delete</Button>
          </Table.Cell>

        </Table.Row>
                  )}
      </Table.Body>
  );
};

export default ExercisesList;