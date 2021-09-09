import React, {useState} from 'react';
import './App.css';
import ExersiceList from './components/ExersiceList';

function App() {
  const [exercises , setExercises] = useState( [
    {id:1,name:"bench", sets:"4", reps:"12-6"},
    {id:2,name:"leg", sets:"4", reps:"12-6"},
    {id:3,name:"urm", sets:"4", reps:"12-6"}
  ])
  


  
  return (
    <div className="App">
        <ExersiceList exercises={exercises} title="Day B"/>
    </div>
  );
}

export default App;
