//Global
import React from 'react';
import {Container,Segment,Grid,Message,Header,Button,Card,Modal,Icon} from 'semantic-ui-react';

//Local
import Searching from '../components/diray/Searching';
import MyPagination from '../components/MyPagination';
import OldProgram from '../components/diray/OldProgram';
import ProgramList from '../components/program/ProgramList';
import ChooseProgram from '../components/home/ChooseProgram';


const Diray = () => {

  const [open,
    setOpen] = React.useState(false)

  return (
    <Container>

      {/* modal for lists */}
      <Modal open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
        <Header icon='archive' content='Archive Old trainings'/>
        <Modal.Content>
          <OldProgram/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => setOpen(false)}>
            <Icon name='remove'/>
            No
          </Button>
          <Button color='green' onClick={() => setOpen(false)}>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>

      {/* if no choosed program */}
      <Segment>
        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as='h1'>Choose program</Header>
              <p>
                Before start train you need to choose program
              </p>
              <Modal
                trigger={< Button primary > Choose </Button>}
                header='Choose program'
                content={<ChooseProgram/>}
                actions={[
                'Close', {
                  key: 'done',
                  content: 'Choose',
                  positive: true
                }
              ]}/>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Segment>

      {/* end choosed program */}
      <Header as='h1'>ELSE</Header>
      <Segment>
        <Searching/>

        <Grid columns={5} divided style={{
          marginTop: "40px"
        }}>
          <Grid.Row>
            <Grid.Column>

              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>

            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
            <Grid.Column>
              <Card
                onClick={() => setOpen(true)}
                link
                header='Power - Day A'
                meta=' 15.09.2021'
                description={['1 exersice - ', ' nihilistic behavior are a source of concern for his family.'].join('')}/>
            </Grid.Column>
          </Grid.Row>

        </Grid>
        <MyPagination/>
      </Segment>
    </Container>
  );
};

export default Diray;