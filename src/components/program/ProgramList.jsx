//Global
import React, {useState, useEffect} from 'react';
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Modal,
  Grid
} from 'semantic-ui-react'

//Local
// import api from '../../lib/api';
// import MyPagination from '../MyPagination';
import ProgramModal from './ProgramModal';
import DayExersice from "./DayExersice";
import api from '../../lib/api';

const dataDay = {
  cardData: [
    {
      id: 1,
      title: <DayExersice days={5} usedArray={1}/>
    }, {
      id: 2,
      title: <DayExersice days={4}/>
    }, {
      id: 3,
      title: <DayExersice days={3}/>
    }, {
      id: 4,
      title: <DayExersice days={1}/>
    }
  ]
}

const ProgramList = () => {
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [programs, setPrograms] = useState([]);

  async function loadPrograms() {
    setLoading(true);
    try {
      // Fix pagination here
      const {page, limit, total, data} = await api.fetchPrograms({page: 0, limit: 3});
      setPrograms(data)
    } catch(error) {
      // TODO! Fix me!
      console.log('Found some error', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => loadPrograms(), [])

  const createProgram = (newProgram) => {
    // setProgramState([ ...programState, newProgram ]);
  }

  const removeProgram = async (id) => {
    setLoading(true);
    setLoadingId(id);
    try {
      await api.removeProgram(id);
    } catch(error) {
      // TODO! Fix me!
      console.log('Found some error', error);
    } finally {
      setLoadingId(null)
    }

    await loadPrograms();
  }

  return (
    <Container>
      <Header as='h1' style={{ display: 'flex', justifyContent: 'center'}}>Program Editor</Header>

      <Container>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProgramModal 
              create={createProgram}
              array={programs}
              // onClick={dataDay.cardData.push({ id: arrayDay + 1, title: <DayExersice days={1}/>})}
            />
          </div>

          {loading && <Segment>Loading...</Segment>}

          {programs.map(({id, type, name, desciption}) => <Segment>
            <Segment basic>
              <div>
                <Modal
                  trigger={< Button positive >Edit</Button>}
                  header='Program Editor'
                  content={<DayExersice programId={id} days={4}/>}
                  actions={[
                    'Close', {
                      key: 'done',
                      content: 'Done',
                      positive: true
                    }
                  ]}/> 

                < Button color='red' onClick={() => removeProgram(id)}>
                  Remove
                </Button>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                  </Grid.Row>
                </Grid>

                <Header as='h2' icon textAlign='center'>
                  <Header.Content>[{id}] --- {name}</Header.Content>
                </Header>
                <Header as='h5' icon textAlign='center'>
                  <Header.Content>{type}</Header.Content>
                </Header>
                <Header as='h3' textAlign='center'>{desciption}</Header>
                {loadingId === id && 'deleting'}
              </div>
            </Segment>
          </Segment>)}

        </div>
      </Container>

      {/* <MyPagination/> */}
    </Container>
  );
};

export default ProgramList;