import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest1
  }) => (
      <Route {...rest1} component={(props) => (
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
            <Redirect to="/" />
          )
      )} />
    );

// export const PrivateRoute = (props) => {
//       console.log(props.isAuthenticated);
// };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  });
  
  export default connect(mapStateToProps)(PrivateRoute);