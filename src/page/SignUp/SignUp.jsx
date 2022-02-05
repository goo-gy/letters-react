import React from 'react';
// local
import TopHeader from 'shared/TopHeader';
import Section from 'shared/Section';
//
import SignUpBox from './SignUpBox';

const Login = () => {
  return (
    <div className="py-24 align-middle">
      <Section className="m-auto align-middle">
        <SignUpBox />
      </Section>
    </div>
  );
};

export default Login;
