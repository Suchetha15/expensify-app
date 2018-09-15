import React from 'react';

const RemoveAction = (props) => (
  <div>
    <button 
      onClick={props.handleDelete}
      className="button button-secondary"
    >Remove Expense</button>
  </div>
);
  
export default RemoveAction;