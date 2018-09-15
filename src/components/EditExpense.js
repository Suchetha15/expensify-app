import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';
import RemoveAction from './RemoveAction';
import {openModal, closeModal} from '../actions/filters';

class EditExpensePage extends React.Component{
  handleDelete = () => {
		this.props.openModal();
	}

	handleRemoveExpense = () => {
		this.props.startRemoveExpense(this.props.expense.id);
		this.props.closeModal();
		this.props.history.push('/');
	}

	handleClearDeleteOption = () => {
		this.props.closeModal();
	};
    
    render(){
      return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div> 
          </div> 
          
          <div className="content-container">
            <ExpenseForm 
              expense={this.props.expense}
              onSubmit={(expense) => {
                this.props.dispatch(startEditExpense(this.props.match.params.id, expense));
                this.props.history.push('/');
              }}
            />
            {/* <button 
              className="button button-secondary"
              onClick = {() => {
              props.dispatch(startRemoveExpense({ id: props.expense.id }));
              props.history.push('/');
            }}>Remove Expense</button> */}
          
            {/*This is EditExpensePage with id {props.match.params.id}*/}
            <RemoveAction
						handleDelete={this.handleDelete}
					/>
					</div>
					<div className="content-container">
						<RemoveModal 
							handleRemoveBlog = {this.handleRemoveBlog}
							//removeSelected = {this.props.removeSelected}
							handleClearDeleteOption = {this.handleClearDeleteOption}
						/>
          </div>
        </div>
      );
    }
  }
    
//console.log('updated', expense);
  const mapStatetoProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id),
      removeSelected: state.filters.removeSelected
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  });

  export default connect(mapStatetoProps,mapDispatchToProps )(EditExpensePage);