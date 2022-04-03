import React, { useEffect } from 'react';
import clientSocket from 'socket.io-client';

// local
import Section from 'shared/Section';
import SimpleButton from 'shared/SimpleButton';
import SimpleInput from 'shared/SimpleInput';
import { useState } from 'react';

const url = process.env.REACT_APP_CHAT_URL;

const socket = clientSocket(url);
console.log(url);

const enterFunction = (name) => {
  console.log(`${name}님이 입장하셨습니다.`);
};

const alertFunction = (msg) => {
  alert(msg);
};

const Chat = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('wake up');
  console.log(name);
  const handleJoin = () => {
    try {
      socket.emit('room_join', { name }, enterFunction);
      socket.on('msg', (msg) => {
        alert(msg);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleMessage = () => {
    try {
      socket.emit('msg', { msg }, alertFunction);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);
  return (
    <Section>
      <div className="my-5 mx-auto">
        <SimpleInput value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <SimpleButton text={'Enter'} func={handleJoin} />
        <SimpleButton text={'Alert'} func={handleMessage} />
      </div>
    </Section>
  );
};

export default Chat;
