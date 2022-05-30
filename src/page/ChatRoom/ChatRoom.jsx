import React from 'react';
import Section from 'shared/Section';
import RoomTable from './Component/RoomTable';
import AuthUser from 'shared/AuthUser';

const ChatRoom = () => {
  return (
    <AuthUser>
      <Section>
        <RoomTable />
      </Section>
    </AuthUser>
  );
};

export default ChatRoom;
