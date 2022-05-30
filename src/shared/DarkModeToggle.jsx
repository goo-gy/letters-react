import { Switch } from '@headlessui/react';
import { connect } from 'react-redux';

// local
import actionDarkMode from 'redux/action/darkMode.js';

const DarkModeToggle = ({ darkMode, darkModeToggle }) => {
  const handleToggle = () => {
    window.sessionStorage.setItem('darkMode', !darkMode);
    darkModeToggle();
  };

  return (
    <div className="px-3">
      <Switch
        checked={darkMode}
        onChange={handleToggle}
        className="bg-gray-700 dark:bg-red-400
          relative inline-flex flex-shrink-0 h-[29px] w-[60.5px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { darkMode: state.darkMode };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    darkModeToggle: () => dispatch(actionDarkMode.toggle()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);
