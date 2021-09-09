import React, {useState} from 'react';
import './App.css';
import ExersiceList from './components/ExersiceList';
import { Input,Button } from 'semantic-ui-react'

function App() {
  const [exercises , setExercises] = useState( [
    {id:1,name:"Жим лежа", sets:"4", reps:"12-6"},
    {id:2,name:"Брусья", sets:"4", reps:"12-6"},
    {id:3,name:"Бабочка", sets:"4", reps:"12-6"}
  ])
  // const [exercises2 , setExercises2] = useState( [
  //   {id:1,name:"Становая", sets:"4", reps:"12-6"},
  //   {id:2,name:"Шраги", sets:"4", reps:"12-6"},
  //   {id:3,name:"Римский", sets:"4", reps:"12-6"}
  // ])

  // const [exercises3 , setExercises3] = useState( [
  //   {id:1,name:"Присед", sets:"4", reps:"12-6"},
  //   {id:2,name:"Жим ногами", sets:"4", reps:"12-6"},
  //   {id:3,name:"Икры", sets:"4", reps:"12-6"}
  // ])


  const [exercise,setExercise] = useState({name:'',sets:'',reps:''})


  
  const addProgram = (e) => {  
      e.preventDefault()  
      setExercises([...exercises,{...exercise, id: Date.now()}])
      setExercise({name:'',sets:'',reps:''})

  }


  


  
  return (
    <div className="App">
        <ExersiceList exercises={exercises} title="Day A"/>
        {/* <ExersiceList exercises={exercises2} title="Day B"/>
        <ExersiceList exercises={exercises3} title="Day C"/> */}

        <form>
              <div>
                <Input icon='users' iconPosition='left' 
                    value={exercise.name}
                    onChange={e => setExercise({...exercise, name: e.target.value})}
                    type="text" 
                    placeholder="Названия упражнения"
                    />
              </div>
              <div>
                <Input icon='users' iconPosition='left' 
                    value={exercise.sets}
                    onChange={e => setExercise({...exercise, sets: e.target.value})}
                    type="text" 
                    placeholder="Сколько сетов"
                    />  
              </div>
              <div>
                  <Input icon='users' iconPosition='left'  
                    value={exercise.reps}
                    onChange={e => setExercise({...exercise, reps: e.target.value})}
                    type="text" 
                    placeholder="Сколько повторов"
                    />
              </div>      
               <Button positive onClick={addProgram}>Добавить упражнения</Button>
          </form>
    </div>
  );
}

export default App;
