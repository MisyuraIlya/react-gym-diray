//  Global
import React from 'react';
import {Table, Button} from 'semantic-ui-react'

const exercise = (props) => {

  return (
    <Table.Row>
      <Table.Cell>{props.exercise.name}</Table.Cell>
      <Table.Cell textAlign='center'>{props.exercise.sets}</Table.Cell>
      <Table.Cell textAlign='center'>{props.exercise.reps}</Table.Cell>
      <Table.Cell textAlign='center'>
        <Button negative>Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default exercise;
