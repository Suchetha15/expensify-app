import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className='header'>
    <div className="content-container">
      <div className="header__content">
        <Link className='header__title' to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <div className="header__user">
          <img src={props.auth.userImg} />
          <p>Logged in, {props.auth.userName}</p>
          <button className="button button-logout" onClick={props.startLogout}>Logout</button>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
  auth: state.auth 
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);