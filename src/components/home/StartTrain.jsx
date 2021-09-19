//Global
import React, {Component} from 'react'
import {Accordion,Icon,Button,Grid,Divider,Header,Segment,Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

//Local
import OldProgram from '../diray/OldProgram'
import ProgramList from '../program/ProgramList';

export default class AccordionExampleFluid extends Component {
  state = {
    activeIndex: 0
  }

  handleClick = (e, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index
      ? -1
      : index

    this.setState({activeIndex: newIndex})
  }

  render() {
    const {activeIndex} = this.state

    return (

      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='universal access'/>
                Current Program
              </Header>
              <Accordion fluid styled>

                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}>
                  <Icon name='dropdown'/>
                  Day A
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <OldProgram/>
                  <Link to='/train'>
                    <Button primary>Start Train</Button>
                  </Link>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}>
                  <Icon name='dropdown'/>
                  Day B
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 1}>
                  <OldProgram/>
                  <Link to='/train'>
                    <Button primary>Start Train</Button>
                  </Link>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}>
                  <Icon name='dropdown'/>
                  Day C
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 2}>
                  <OldProgram/>
                  <Link to='/train'>
                    <Button primary>Start Train</Button>
                  </Link>
                </Accordion.Content>

              </Accordion>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='world'/>
                Start New Program
              </Header>
              <Modal
                trigger={< Button primary > Choose </Button>}
                header='Choose program'
                content={< ProgramList />}
                actions={[
                'Close', {
                  key: 'done',
                  content: 'Choose',
                  positive: true
                }
              ]}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    )
  }
}
