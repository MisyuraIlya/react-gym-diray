//Global
import React from 'react';
import {
  Segment,
  Container,
  Header,
  Icon,
  Image,
  Button,
  Modal,
  Grid
} from 'semantic-ui-react'

//Local
import SplitProgram from './SplitProgram';
import CreateProgram from './CreateProgram';
import MyPagination from '../MyPagination';

const ProgramState = [
  {
    programName: 'program A',
    programStyle: 'Power',
    programDescription: 'aaaaaaaa',
    img: '/img/1.jpg'
  }, {
    programName: 'program B',
    programStyle: 'Mass',
    programDescription: 'bbbbbbbb',
    img: '/img/2.jpg'
  }, {
    programName: 'program C',
    programStyle: 'Fitness',
    programDescription: 'bbbbbbbb',
    img: '/img/2.jpg'
  }
]

const ProgramList = () => {
  return (
    <Container>
      <Header
        as='h1'
        style={{
        display: 'flex',
        justifyContent: 'center'
      }}>Program Editor</Header>
      <Container>
        <div>
          <div
            style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CreateProgram/>
          </div>

          {ProgramState.map(list => <Segment>
            <Segment basic>
              <div>
                <Modal
                  trigger={< Button positive > Edit </Button>}
                  header='Program Editor'
                  content={< SplitProgram />}
                  actions={[
                  'Close', {
                    key: 'done',
                    content: 'Done',
                    positive: true
                  }
                ]}/>
                <Grid columns={3} >
                  <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                    <Image src={list.img} size='medium' circular/>

                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Header as='h2' icon textAlign='center'>
                  <Header.Content>{list.programName}</Header.Content>
                </Header>
                <Header as='h3' textAlign='center'>{list.programDescription}</Header>
              </div>
            </Segment>
          </Segment>)}

        </div>
      </Container>
      <MyPagination/>
    </Container>
  );
};

export default ProgramList;