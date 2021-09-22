import React from 'react';
import {Select} from 'semantic-ui-react';

const DayOption = [
    { key: 'af', value: 'af', text: 'A' },
    { key: 'ax', value: 'ax', text: 'B' },
  ]
  
  const StyleOption = [
    { key: 'af', value: 'af', text: 'Power' },
    { key: 'ax', value: 'ax', text: 'Mass' },
  ]
const SelectOption = () => {
    return (
        <div>
         <Select placeholder='Select Day' options={DayOption} />
        <Select placeholder='Select Style' options={StyleOption} />
        </div>
    );
};

export default SelectOption;