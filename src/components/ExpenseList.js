import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpensesListItem';
import selectExpense from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (<p> No Expenses</p>) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>;
            })
        )}
    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
        //filters: state.filters
    };
 };

export default connect(mapStatetoProps)(ExpenseList);

