import React from 'react';
import {Card,Modal,Button,Icon,Header,Image} from 'semantic-ui-react'
import OldProgram from '../diray/OldProgram';
const ChooseProgram = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div style={{
      margin: '1em 1em'
    }}>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <OldProgram/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
          Back
          </Button>
          <Button
            content="Choose"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>


      <Card
        link 
        header='Program A'
        meta='Power'
        description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family.'].join('')}
        fluid
        onClick={() => setOpen(true)}
      />
      <Card
        link
        header='Program B'
        meta='Power'
        description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family.'].join('')}
        fluid
        onClick={() => setOpen(true)}/>
        
      <Card
        link
        header='Program C'
        meta='Power'
        description={['Rick is a genius scientist whose alcoholism and reckless,', ' nihilistic behavior are a source of concern for his family.'].join('')}
        fluid
        onClick={() => setOpen(true)}/>
    </div>
  );
};

export default ChooseProgram;