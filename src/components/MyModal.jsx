import React from 'react';
import { Modal, Button } from 'semantic-ui-react'

const MyModal = () => {
    return (
        <Modal
        trigger={<Button>Show Modal</Button>}
        header='Reminder!'
        content='Call Benjamin regarding the reports.'
        
      />
    );
};

export default MyModal;