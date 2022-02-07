import React from 'react';

// shared
import TopHeader from 'shared/TopHeader';
import Section from 'shared/Section';

// local
import SignIn from './SignInBox';

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
