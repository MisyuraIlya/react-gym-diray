//Global
import React from 'react';
import {Pagination} from 'semantic-ui-react'

const MyPagination = () => {
  return (
    <Pagination
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}

      boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}/>);
};

export default MyPagination;