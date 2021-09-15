import React from 'react';
import { Button, Icon, Image, Modal, Form } from 'semantic-ui-react'



const options = [
    { key: 'm', text: 'Power', value: 'power' },
    { key: 'f', text: 'Mass', value: 'mass' },
    { key: 'o', text: 'Fitess', value: 'fitness' },
  ]

  
const ProgramModal = () => {

    const [open, setOpen] = React.useState(false)


    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button>Scrolling Content Modal</Button>}
        >
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
                <Image size='medium' src='/images/wireframe/image.png' wrapped />

                <Modal.Description>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>

                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Program Name' placeholder='Program Name' />
                            <Form.Select
                                fluid
                                label='Training'
                                options={options}
                                placeholder='Training'
                            />
                        </Form.Group>

                        <Form.TextArea label='About the program' placeholder='Description...' />
                    </Form>


                </Modal.Description>

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)} positive>
                    Add <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ProgramModal;