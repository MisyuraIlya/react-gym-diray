import React from 'react';
import Exercise from './ProgramItem';

const exersiceList = ({exercises}) => {
    return (
        <div>
            
        <h1>Day A </h1>
        {exercises.map(exercise =>
          <Exercise exercise={exercise} key={exercise.id} />
          )}  
        </div>
    );
};

export default exersiceList;