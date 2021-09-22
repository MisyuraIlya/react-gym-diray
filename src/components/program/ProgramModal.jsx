//Global
import React, {useState} from 'react';
import {Button, Icon, Image, Modal, Form} from 'semantic-ui-react'

// const options = [   {     key: 'm',     text: 'Power',     value: 'power' },
// {     key: 'f',     text: 'Mass',     value: 'mass'   }, {     key: 'o',
// text: 'Fitess',     value: 'fitness'   } ]




const ProgramModal = ({create2}) => {


  const [program,setProgram] = useState({programName:'', programStyle:'' , programDescription:''})


    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    function handleImageChange(e) {
      console.log(e.target.files[0].name)
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          setImage(e.target.result);
          setIsUploaded(true);
        };
        
        reader.readAsDataURL(e.target.files[0]);
      }
    }

  const [open,
    setOpen] = React.useState(false)

  const addNewProgram = (e) => {
    const newProgram = {
      ...program
    }
    create2(newProgram)
    setProgram({programName:'', programStyle:'' , programDescription:''})
    setOpen(false)
  }


  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={< Button primary > Creating program </Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        {!isUploaded ? (
        <Image size='medium' src='/img/unkownImage.png' wrapped/>
        ) : ( 
          <Image 
          size='medium' 
          id="uploaded-image"
          src={image}
          draggable={false}
          alt="uploaded-img"/>
          )}
        <Modal.Description>
          
          <p>
            This is an example of expanded content that will cause the modal's dimmer to
            scroll.
          </p>

          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                value={program.programName}
                fluid
                label='Program Name'
                placeholder='Program Name'
                onChange={e => setProgram({...program, programName: e.target.value})}/>
                 {/* <Form.Select
                fluid
                value={selectionProgram}
                label='Training'
                options={options}
                placeholder='Training'
                onChange={e => setSelectionProgram(e.target.value)}/> */}
              <Form.Input
                value={program.programStyle}
                fluid
                label=' Power/Mass/Fitness'
                placeholder='Program'
                onChange={e => setProgram({...program, programStyle: e.target.value})}/>
              <Form.Input
                 type="file"
                label=' Image'
                placeholder='Program'
                accept = ".jpg,.jped,.gif,.png,.mpv,.mp4"
                onChange={handleImageChange}
                />
            </Form.Group>

            <Form.TextArea
              value={program.programDescription}
              onChange={e => setProgram({...program, programDescription: e.target.value})}
              label='About the program'
              placeholder='Description...'/>
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