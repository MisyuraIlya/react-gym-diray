//Global
import React, {useState} from 'react';
import {Button, Header, Icon, Modal, Input} from 'semantic-ui-react'
// Local
import api from '../../lib/api'

const PostForm = ({programId, exersiceId, onSuccess}) => {
  const [exercise, setExercise] = useState({name: '', sets: '', repetitions: ''});
  const [isOpened, setIsOpened] = useState(false);

  const addProgram = async () => {
    try {
      await api.addProgramExersice(programId, exersiceId, exercise);
      setExercise({name: '', sets: '', repetitions: ''});
      await onSuccess();
      setIsOpened(false)
    } catch(error) {
      // TODO! Fix me!
      console.log('Found some error', error);
    }
  }

  return (
    <Modal
      closeIcon
      open={isOpened}
      trigger={< Button style={{marginTop:"20px"}} positive icon='plus square' />}
      onClose={() => setIsOpened(false)}
      onOpen={() => setIsOpened(true)}
    >
      <Header icon='archive' content='Добавит новое упражнения'/>
      <Modal.Content>

        <Input
          icon='chevron circle down'
          iconPosition='left'
          value={exercise.name}
          onChange={({target}) => setExercise({ ...exercise, name: target.value})}
          type="text"
          placeholder="Названия упражнения"/>

        <Input
          icon='sort numeric down'
          iconPosition='left'
          value={exercise.sets}
          onChange={({target}) => setExercise({ ...exercise, sets: target.value})}
          type="text"
          placeholder="Сколько сетов"/>

        <Input
          icon='sort numeric up'
          iconPosition='left'
          value={exercise.repetitions}
          onChange={({target}) => setExercise({ ...exercise, repetitions: target.value})}
          type="text"
          placeholder="Сколько повторов"/>

      </Modal.Content>

      <Modal.Actions>
        <Button color='red' onClick={() => setIsOpened(false)}>
          <Icon name='remove'/> No
        </Button>

        <Button color='green' onClick={addProgram}>
          <Icon name='checkmark'/> Yes
        </Button>
      </Modal.Actions>
    </Modal>

  );
};

export default PostForm;