//Global
import React from 'react';
import {useStopwatch} from 'react-timer-hook';
import {Button, Header} from 'semantic-ui-react'

const TimerCounter = (expiryTimestamp) => {

  const {seconds,minutes,hours,start,pause,reset} = useStopwatch({autoStart: true});

  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var dateStr = date + "-" + month + "-" + year;

  return (

    <div style={{
      textAlign: 'center'
    }}>
      <Header as='h1'>Training Time</Header>
      <Header as='h3'>{dateStr}</Header>

      <div style={{
        fontSize: '100px',
        marginTop: '30px'
      }}>

        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div style={{
        marginTop: "50px"
      }}>
        <Button
          color='red'
          content='Pause'
          icon='pause'
          labelPosition='left'
          onClick={pause}/>
        <Button
          color='green'
          content='Next'
          icon='right arrow'
          labelPosition='right'
          onClick={start}/>
        <Button
          color='gray'
          content='Pause'
          icon='redo'
          labelPosition='left'
          onClick={reset}/>
      </div>
    </div>

  );
};

export default TimerCounter;