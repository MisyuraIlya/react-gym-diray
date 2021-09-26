//Global
import React, {useState} from 'react';
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
import MyPagination from '../MyPagination';
import ProgramModal from './ProgramModal';

import DayExersice from "./DayExersice";


const dataDay = {
    cardData:[
        {
            id:1,
            title:<DayExersice days={5}/>,
        },
        {
            id:2,
            title:<DayExersice days={4}/>,
        },
        {
            id:3,
            title:<DayExersice days={3}/>,
        },
        {
            id:4,
            title:<DayExersice days={1}/>,
        },
    ]
}
const ProgramList = () => {

  const dates = dataDay.cardData
  const [programState,
    setProgramState] = useState([
    {
      id: 1,
      programName: 'program A',
      programStyle: 'Power',
      programDescription: 'aaaaaaaa'
    }, {
      id: 2,
      programName: 'program B',
      programStyle: 'Mass',
      programDescription: 'bbbbbbbb'
    }, {
      id: 3,
      programName: 'program C',
      programStyle: 'Fitness',
      programDescription: 'bbbbbbbb'
    }
    , {
      id: 4,
      programName: 'program C',
      programStyle: 'Fitness',
      programDescription: 'bbbbbbbb'
    }
  ])
  const createProgram = (newProgram) => {
    setProgramState([
      ...programState,
      newProgram
    ])
  }

  const removeProgram = (program) => {
    setProgramState(programState.filter(p => p.id !== program.id))

  }

  let arrayDay = dataDay.cardData.length

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
            <ProgramModal create2={createProgram} array={programState} onClick={dataDay.cardData.push({id:arrayDay+1,title:<DayExersice days={1}/>})}/>
          </div>

          {programState.map(list => <Segment>
            <Segment basic>
              <div>
                {dates
                  .filter(i => i.id === list.id)
                  .map(i => <Modal
                    trigger={< Button positive > Edit1 </Button>}
                    header='Program Editor'
                    content={i.title}
                    actions={[
                    'Close', {
                      key: 'done',
                      content: 'Done',
                      positive: true
                    }
                  ]}/>)}

                < Button color='red' onClick={() => removeProgram(list)}>
                  Remove
                </Button>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                      <Image src={list.img} size='medium' circular/>

                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                  </Grid.Row>
                </Grid>
                <Header as='h2' icon textAlign='center'>
                  <Header.Content>{list.programName}</Header.Content>
                </Header>
                <Header as='h5' icon textAlign='center'>
                  <Header.Content>{list.programStyle}</Header.Content>
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