//Global
import _ from 'lodash'
import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') => _.times(number, (index) => ({key: index, text: `${prefix}${index}`, value: index}))
const Searching = () => {
  return (
    <div>
      <Dropdown
        multiple
        search
        selection
        closeOnChange
        options={getOptions(5)}
        placeholder='Program:'/>{' '}
      <Dropdown
        multiple
        search
        selection
        options={getOptions(5)}
        placeholder='Muscle'/>

      <Dropdown multiple search selection options={getOptions(5)} placeholder='3'/>
    </div>
  );
};

export default Searching;