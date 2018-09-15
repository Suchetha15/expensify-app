import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';


const RemoveModal =  (props) => {
	console.log(props.removeSelected);
		return (
			// props.removeSelected ? 
			<Modal
				isOpen = {props.removeSelected}
				contentLabel = 'Remove Expense'
				onRequestClose = {props.handleClearDeleteOption}
				closeTimeoutMS = {200}
				className = 'modal'
			>
				<h3>Are you sure you want to delete this expense?</h3>
                <div className="button__modal">
				    <button className='button' onClick={props.handleRemoveBlog}>Yes</button>  
				    <button className='button button-secondary' onClick={props.handleClearDeleteOption}>No</button>  
                </div>
            </Modal> 
		);
}

const mapStateToProps = (state) => {
    return {
        removeSelected: state.filters.removeSelected
    };
};

export default connect(mapStateToProps)(RemoveModal);