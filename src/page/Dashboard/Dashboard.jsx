import React, { useEffect } from 'react';

// local
import Section from 'shared/Section';
import UserTable from './Component/UserTable';
import AuthUser from 'shared/AuthUser';

const Dashboard = () => {
  return (
    <AuthUser>
      <Section>
        <UserTable />
      </Section>
    </AuthUser>
  );
};

export default Dashboard;
