import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// local
import Section from 'shared/Section';
import SimpleButton from 'shared/SimpleButton';
import SimpleInput from 'shared/SimpleInput';
import ChatLog from './Component/ChatLog';
import Member from './Component/Member';

const url = process.env.REACT_APP_CHAT_URL;
const socket = io.connect(url);

const event = {
  connection: 'connection',
  disconnect: 'disconnect',
  joinRoom: 'join_room',
  msg: 'msg',
};

const Chat = () => {
  const [editName, setEditName] = useState('');
  const [myName, setMyName] = useState('');
  const [msg, setMsg] = useState('');
  const [chatLogList, setChatLogList] = useState([]);
  const [people, setPeople] = useState([]);

  const sendDone = (time) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      {
        userName: myName,
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
        { roomName: 'global', userName: myName, msg },
        sendDone
      );
    }
  };

  const joinDone = ({ people, userName, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { userName, msg: `${userName}님이 입장하셨습니다.`, time },
    ]);
    setPeople((prevPeople) => people);
  };

  const handleJoin = () => {
    socket.emit(
      event.joinRoom,
      { userName: editName, roomName: 'global' },
      joinDone
    );
    setMyName(editName);
    setEditName('');
  };

  const handleReceiveMsg = (chatLog) => {
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatLog]);
  };
  const handleReceiveJoin = ({ userName, time }) => {
    setChatLogList((prevChatLogList) => [
      ...prevChatLogList,
      { userName, msg: `${userName}님이 입장하셨습니다.`, time },
    ]);
    setPeople((prevPeople) => [...prevPeople, userName]);
  };
  const handleReceiveLeave = ({}) => {};

  useEffect(() => {
    socket.on(event.msg, handleReceiveMsg);
    socket.on(event.joinRoom, handleReceiveJoin);
    socket.on(event.disconnect, handleReceiveLeave);
    return () => {
      socket.off(event.msg, handleReceiveMsg);
      socket.off(event.msg, handleReceiveJoin);
      socket.off(event.msg, handleReceiveLeave);
    };
  }, []);
  return (
    <>
      <Section>
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
      </Section>
      <Section>
        <div>
          {people.map((name, index) => (
            <Member key={index} name={name} />
          ))}
        </div>
        <div>
          <ChatLog chatLogList={chatLogList} />
          <div className="my-5 mx-auto">
            <SimpleInput
              value={msg}
              placeholder="msg"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <SimpleButton text={'Send'} func={handleSend} />
        </div>
      </Section>
    </>
  );
};

export default Chat;
