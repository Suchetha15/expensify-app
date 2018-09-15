import React from 'react';
import { connect} from "react-redux";
import { startLogin, startLoginFB } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginFB }) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button onClick={startLogin} className='button'>Login with Google</button>
            <button onClick={startLoginFB} className='button button-fb'>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFB: () => dispatch(startLoginFB())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

