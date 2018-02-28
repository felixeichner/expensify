import React from 'react';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      Editing the Expense with ID: {props.match.params.id}
    </div>
  );
};

export default EditExpense;