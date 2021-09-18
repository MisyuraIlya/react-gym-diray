import React from 'react';
import { Container, Segment,Input, Button  } from 'semantic-ui-react';

const CreateExercise = () => {
    return (
        <div>
            <Container>
                <Segment>
                <Input placeholder='Create Exercise' />   
                <Button positive>Create</Button>
                </Segment>
            </Container>
        </div>
    );
};

export default CreateExercise;