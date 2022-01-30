import React from 'react';
import { Route, Routes } from 'react-router-dom';
//local
// import { Home } from 'page';
import Home from 'page/Home/Home';
import Login from 'page/Login/Login';
import TopHeader from 'shared/TopHeader';
import { connect } from 'react-redux';

function App(props) {
  const darkMode = props.darkMode;
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="bg-gradient-to-r from-primaryStart to-primaryEnd min-h-screen dark:from-primaryStartWarm dark:to-primaryEndWarm">
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { darkMode: state.darkMode };
};
export default connect(mapStateToProps)(App);
