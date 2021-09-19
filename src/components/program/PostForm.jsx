//Global
import React, {useState} from 'react';
import {Button, Header, Icon, Modal, Input} from 'semantic-ui-react'

const PostForm = ({create}) => {

  const [exercise,
    setExercise] = useState({name: '', sets: '', reps: ''})

  const addProgram = (e) => {
    e.preventDefault()
    // setExercises([...exercises,{...exercise, id: Date.now()}])
    const newExercise = {
      ...exercise,
      id: Date.now()
    }
    create(newExercise)
    setExercise({name: '', sets: '', reps: ''})
    setOpen(false)
  }

  const [open,
    setOpen] = React.useState(false)
  return (

    <Modal
      closeIcon
      open={open}
      trigger={< Button positive > Show Modal </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}>
      <Header icon='archive' content='Добавит новое упражнения'/>
      <Modal.Content>

        <Input
          icon='chevron circle down'
          iconPosition='left'
          value={exercise.name}
          onChange={e => setExercise({
          ...exercise,
          name: e.target.value
        })}
          type="text"
          placeholder="Названия упражнения"/>

        <Input
          icon='sort numeric down'
          iconPosition='left'
          value={exercise.sets}
          onChange={e => setExercise({
          ...exercise,
          sets: e.target.value
        })}
          type="text"
          placeholder="Сколько сетов"/>

        <Input
          icon='sort numeric up'
          iconPosition='left'
          value={exercise.reps}
          onChange={e => setExercise({
          ...exercise,
          reps: e.target.value
        })}
          type="text"
          placeholder="Сколько повторов"/>

      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove'/>
          No
        </Button>
        <Button color='green' onClick={addProgram}>
          <Icon name='checkmark'/>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>

  );
};

export default PostForm;