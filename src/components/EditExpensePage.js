import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div>
      Editing the Expense with ID: {props.match.params.id}
    </div>
  );
};