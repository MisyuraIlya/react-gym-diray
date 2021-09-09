import React, {useState} from 'react';
import { Input,Button,Grid,Segment } from 'semantic-ui-react'


const PostForm = ({create}) => {


  const [exercise,setExercise] = useState({name:'',sets:'',reps:''})


  const addProgram = (e) => {  
    e.preventDefault()  
    // setExercises([...exercises,{...exercise, id: Date.now()}])
    const newExercise = {
      ...exercise, id: Date.now()
    }
    create(newExercise)
    setExercise({name:'',sets:'',reps:''})

}

  return (
          <form>
              <div>
                <Input icon='chevron circle down' iconPosition='left' 
                    value={exercise.name}
                    onChange={e => setExercise({...exercise, name: e.target.value})}
                    type="text" 
                    placeholder="Названия упражнения"
                    />
              </div>
              <div>
                <Input icon='sort numeric down' iconPosition='left' 
                    value={exercise.sets}
                    onChange={e => setExercise({...exercise, sets: e.target.value})}
                    type="text" 
                    placeholder="Сколько сетов"
                    />  
              </div>
              <div>
                  <Input icon='sort numeric up' iconPosition='left'  
                    value={exercise.reps}
                    onChange={e => setExercise({...exercise, reps: e.target.value})}
                    type="text" 
                    placeholder="Сколько повторов"
                    />
              </div>      
              <Button positive onClick={addProgram}>Добавить упражнения</Button>
          </form>
  );
};

export default PostForm;