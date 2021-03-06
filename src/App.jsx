import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

// local
import actionDarkMode from 'redux/action/darkMode';

import TopHeader from 'shared/TopHeader';
import Home from 'page/Home/Home';
import Login from 'page/Login/Login';
import SignUp from 'page/SignUp/SignUp';
import Dashboard from 'page/Dashboard/Dashboard';
import ChatRoom from 'page/ChatRoom/ChatRoom';
import Chat from 'page/Chat/Chat';

function App(props) {
  const { darkMode } = props;
  const { darkModeSet } = props;

  useEffect(() => {
    const savedDarkMode = window.sessionStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) darkModeSet(savedDarkMode);
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="bg-gradient-to-r from-primaryStart to-primaryEnd min-h-screen dark:from-primaryStartWarm dark:to-primaryEndWarm">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/chat/:roomId" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ darkMode: state.darkMode });
const mapDispatchToProps = (dispatch) => ({
  darkModeSet: (value) => dispatch(actionDarkMode.set(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
