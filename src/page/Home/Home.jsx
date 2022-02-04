import React from 'react';
import { connect } from 'react-redux';

// local
import { actionDarkMode } from 'redux/reducerDarkMode.js';

const Home = (props) => {
  const handleDark = () => {
    props.darkModeSet(true);
  };

  const handleLight = () => {
    props.darkModeSet(false);
  };

  return (
    <div className="content-center items-center">
      <button
        className="block p-3 m-1 rounded-lg font-bold bg-gray-800 text-gray-50 hover:bg-gray-900"
        onClick={handleDark}
      >
        DARK
      </button>
      <button
        className="block p-3 m-1 rounded-lg font-bold bg-gray-50 text-gray-800 hover:bg-gray-200"
        onClick={handleLight}
      >
        LIGHT
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    darkModeSet: (value) => dispatch(actionDarkMode.set(value)),
  };
};
export default connect(null, mapDispatchToProps)(Home);
