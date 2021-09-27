//Global
import React, { useState } from 'react';
import {
  Container,
  Segment,
  Grid,
  Message,
  Header,
  Button,
  Card,
  Modal,
  Icon,
  Select,
  Input
} from 'semantic-ui-react';

//Local
import Searching from '../components/diray/Searching';
import MyPagination from '../components/MyPagination';
import OldProgram from '../components/diray/OldProgram';
import ProgramList from '../components/program/ProgramList';
import ChooseProgram from '../components/home/ChooseProgram';
import SelectOption from '../components/diray/SelectOption';

const Diray = () => {

  const [seatchQuery, setSearchQuery] = useState()
  const [diray, setDiray] = useState([
    {
      dirayDay: 'A',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'B',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'C',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'A',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'B',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'C',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'A',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'B',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'C',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'A',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'B',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'C',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'A',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }, {
      dirayDay: 'B',
      dirayStyle: 'Power',
      dirayDate: '15.05.2021',
      dirayDesctiption: 'aaaaaas'
    }
  ])
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
                content={< ChooseProgram />}
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
        {/* <Searching/> */}
        {/* <SelectOption
              options={[
                {value:'dirayDay' , text: 'A' },
                {value:'dirayStyle' , text: 'Power' }
              ]}
              /> */}
        <Input 
          placeholder='Search...'/>
        <Grid columns={5}>
          <Grid.Row>
            {diray.map(list => <Grid.Column>

              <div style={{
                marginTop: '20px'
              }}>
                <Card
                  onClick={() => setOpen(true)}
                  link
                  header={list.dirayStyle}
                  meta={list.dirayDate}
                  description={list.dirayDesctiption}/>
              </div>
            </Grid.Column>)}
          </Grid.Row>

        </Grid>
        <MyPagination/>
      </Segment>
    </Container>
  );
};

export default Diray;