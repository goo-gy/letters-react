import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';

// local
import Section from 'shared/Section';
import Member from './Component/Member';
import ChatLog from './Component/ChatLog';

const url = process.env.REACT_APP_CHAT_URL;
const socket = io.connect(url);

const event = {
  auth: 'auth',
  connection: 'connection',
  disconnect: 'disconnect',
  joinRoom: 'join_room',
  leaveRoom: 'leave_room',
  message: 'message',
};

function Chat({ loginUser }) {
  const [message, setMsg] = useState('');
  const [chatLogList, setChatLogList] = useState([]);
  const [roomPeople, setRoomPeople] = useState([]);

  const messageDone = () => {
    setMsg('');
  };

  const handleSend = () => {
    if (message) {
      socket.emit(event.message, { room_id: 'global', message }, messageDone);
    }
  };

  const joinDone = ({ people }) => {
    setRoomPeople((prevPeople) => people);
  };

  const handleJoin = () => {
    socket.emit(
      event.joinRoom,
      { token: loginUser.token, user: loginUser, room_id: 'global' },
      joinDone
    );
  };

  const authDone = () => {
    handleJoin();
  };

  const handleAuth = () => {
    socket.emit(event.auth, { token: loginUser.token }, authDone);
  };

  const handleReceiveMsg = (chatLog) => {
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatLog]);
  };
  const handleReceiveJoin = ({ user, time }) => {
    console.log('receive', user, time);
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { user, message: `${user.name}님이 입장하셨습니다.`, time },
    ]);
    setRoomPeople((prevPeople) => [...prevPeople, user]);
  };

  const handleReceiveLeave = ({ user, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { user, message: `${user.name}님이 퇴장하셨습니다.`, time },
    ]);
    setRoomPeople((prevPeople) =>
      prevPeople.filter((person) => person.id !== user.id)
    );
  };

  const handleLeave = () => {
    socket.emit(event.leaveRoom, {
      user: loginUser,
      room_id: 'global',
    });
  };

  useEffect(() => {
    socket.on(event.message, handleReceiveMsg);
    socket.on(event.joinRoom, handleReceiveJoin);
    socket.on(event.leaveRoom, handleReceiveLeave);
    if (loginUser.id) {
      handleAuth();
    }
    return () => {
      if (loginUser.id) {
        handleLeave();
      }
      socket.off(event.message, handleReceiveMsg);
      socket.off(event.joinRoom, handleReceiveJoin);
      socket.off(event.leaveRoom, handleReceiveLeave);
    };
  }, [loginUser]);
  return (
    <Section>
      <div>
        {roomPeople.map((person, index) => (
          <Member key={index} name={person.name} />
        ))}
      </div>
      <div>
        <ChatLog chatLogList={chatLogList} />
        <div className="my-5 mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              className="rounded border-2 w-full h-10 bg-white border-componentSky text-componentSky hover:border-pointBlue hover:text-pointBlue dark:border-componentWarm dark:text-componentWarm dark:hover:border-pointWarm dark:hover:text-pointWarm"
              value={message}
              onChange={(e) => setMsg(e.target.value)}
            />
          </form>
        </div>
      </div>
    </Section>
  );
}

const mapStateToProps = (state) => ({ loginUser: state.user });
export default connect(mapStateToProps)(Chat);
