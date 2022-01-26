import React from 'react';
// local
import TopHeader from 'shared/TopHeader';
import Section from 'shared/Section';
//
import SignIn from './SignIn';

const Login = () => {
  return (
    <div className="py-24 align-middle">
      <Section className="m-auto align-middle">
        <SignIn />
      </Section>
    </div>
  );
};

export default Login;
