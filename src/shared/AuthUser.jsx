import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthUser = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token) {
      // TODO : check with API
    } else {
      const reduxState = JSON.parse(
        window.localStorage.getItem('persist:root')
      );
      const user = JSON.parse(reduxState.user);
      console.log('call', user);
      if (!user.token) {
        navigate('/login');
      }
    }
  }, [user]);
  return <>{children}</>;
};

const mapStateToProps = (state, OwnProps) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(AuthUser);
