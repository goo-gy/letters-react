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
  connection: 'connection',
  disconnect: 'disconnect',
  joinRoom: 'join_room',
  leaveRoom: 'leave_room',
  msg: 'msg',
};

function Chat({ user }) {
  const [msg, setMsg] = useState('');
  const [chatLogList, setChatLogList] = useState([]);
  const [roomPeople, setRoomPeople] = useState([]);

  const sendDone = (time) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      {
        userName: user.name,
        msg,
        time,
      },
    ]);
    setMsg('');
  };

  const handleSend = () => {
    if (msg) {
      socket.emit(
        event.msg,
        { roomName: 'global', userName: user.name, msg },
        sendDone
      );
    }
  };

  const joinDone = ({ people, userName, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { userName, msg: `${userName}님이 입장하셨습니다.`, time },
    ]);
    setRoomPeople((prevPeople) => people);
  };

  const handleJoin = () => {
    socket.emit(
      event.joinRoom,
      { userName: user.name, roomName: 'global' },
      joinDone
    );
  };

  const handleReceiveMsg = (chatLog) => {
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatLog]);
  };
  const handleReceiveJoin = ({ userName, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { userName, msg: `${userName}님이 입장하셨습니다.`, time },
    ]);
    setRoomPeople((prevPeople) => [...prevPeople, userName]);
  };

  const handleReceiveLeave = ({ userName, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { userName, msg: `${userName}님이 퇴장하셨습니다.`, time },
    ]);
    setRoomPeople((prevPeople) =>
      prevPeople.filter((name) => name !== userName)
    );
  };

  const handleLeave = () => {
    socket.emit(event.leaveRoom, { userName: user.name, roomName: 'global' });
  };

  useEffect(() => {
    socket.on(event.msg, handleReceiveMsg);
    socket.on(event.joinRoom, handleReceiveJoin);
    socket.on(event.leaveRoom, handleReceiveLeave);
    if (user.id) handleJoin();
    return () => {
      if (user.id) handleLeave();
      socket.off(event.msg, handleReceiveMsg);
      socket.off(event.joinRoom, handleReceiveJoin);
      socket.off(event.leaveRoom, handleReceiveLeave);
    };
  }, []);
  return (
    <>
      {/* <Section>
        <div className="my-5 mx-auto">
          <SimpleInput
            value={editName}
            placeholder="your name"
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div>
          <SimpleButton text={'Enter'} func={handleJoin} />
        </div>
      </Section> */}
      <Section>
        <div>
          {roomPeople.map((name, index) => (
            <Member key={index} name={name} />
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
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </form>
          </div>
          {/* <SimpleButton text={'Send'} func={handleSend} /> */}
        </div>
      </Section>
    </>
  );
}

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Chat);
