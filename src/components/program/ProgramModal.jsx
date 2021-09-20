//Global
import React, {useState} from 'react';
import {Button, Icon, Image, Modal, Form} from 'semantic-ui-react'

const options = [
  {
    key: 'm',
    text: 'Power',
    value: 'power'
  }, {
    key: 'f',
    text: 'Mass',
    value: 'mass'
  }, {
    key: 'o',
    text: 'Fitess',
    value: 'fitness'
  }
]

const ProgramModal = () => {

  const [nameProgram,
    setNameProgram] = useState('')

  const [selectionProgram,
    setSelectionProgram] = useState('')

  const [open,
    setOpen] = React.useState(false)

  const addNewProgram = (e) => {
    e.preventDefault()
    console.log(nameProgram)
    console.log(selectionProgram)
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={< Button primary > Creating program </Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Button icon="file image outline"/>
        <Image size='medium' src='/images/wireframe/image.png' wrapped/>
        <Modal.Description>

          <p>
            This is an example of expanded content that will cause the modal's dimmer to
            scroll.
          </p>

          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                value={nameProgram}
                fluid
                label='Program Name'
                placeholder='Program Name'
                onChange={e => setNameProgram(e.target.value)}/>
              <Form.Select
                fluid
                value={selectionProgram}
                label='Training'
                options={options}
                placeholder='Training'
                onChange={e => setSelectionProgram(e.target.value)}/>
            </Form.Group>

            <Form.TextArea label='About the program' placeholder='Description...'/>
          </Form>

        </Modal.Description>

      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} positive onClick={addNewProgram}>
          Add
          <Icon name='chevron right'/>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProgramModal;