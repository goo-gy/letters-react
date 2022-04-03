import React, { useEffect } from 'react';

// local
import Section from 'shared/Section';
import UserTable from './Component/UserTable';

const Dashboard = () => {
  return (
    <Section>
      <UserTable />
    </Section>
  );
};

export default Dashboard;
