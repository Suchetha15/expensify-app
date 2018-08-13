import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div> 
        </div> 
        
        <div className="content-container">
          <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
              props.dispatch(startEditExpense(props.match.params.id, expense));
              props.history.push('/');
            }}
          />
          <button 
            className="button button-secondary"
            onClick = {() => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }));
            props.history.push('/');
          }}>Remove Expense</button>
        
          {/*This is EditExpensePage with id {props.match.params.id}*/}
        </div>
      </div>
    );
  }
//console.log('updated', expense);
  const mapStatetoProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id) 
    };
  };

  export default connect(mapStatetoProps)(EditExpensePage);