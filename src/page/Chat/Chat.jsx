import React, { useState, useEffect } from 'react';
// import SockJs from 'socketjs-client';
import { Client } from '@stomp/stompjs';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// local
import Section from 'shared/Section';
import SimpleButton from 'shared/SimpleButton';
import Member from './Component/Member';
import ChatLog from './Component/ChatLog';
import AuthUser from 'shared/AuthUser';

const url = process.env.REACT_APP_CHAT_URL;
const client = new Client({
  brokerURL: 'ws://localhost:8080/letters-chat-server',
  debug: function (str) {
    console.log('Debug:', str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

function Chat({ loginUser }) {
  const [message, setMsg] = useState('');
  const [chatLogList, setChatLogList] = useState([]);
  const [roomPeople, setRoomPeople] = useState([]);
  const { roomId } = useParams();

  const navigate = useNavigate();

  const handleSend = () => {
    if (message && client.connected) {
      const payload = JSON.stringify({
        channel: roomId,
        sender: loginUser.name,
        message: message,
      });
      client.publish({
        destination: '/pub/chat',
        body: payload,
      });
    }
  };

  const handleReceiveMsg = ({ body }) => {
    const chatData = JSON.parse(body);
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatData]);
  };

  const handleLeave = () => {
    navigate('/chat');
  };

  useEffect(() => {
    if (loginUser.name) {
      client.activate();
      client.onConnect = () => {
        client.subscribe(`/sub/chat/${roomId}`, handleReceiveMsg);
      };
      client.onStompError = () => {};
    }
    return () => {
      if (loginUser.name) {
        client.deactivate();
      }
    };
  }, [loginUser]);
  return (
    <AuthUser>
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
          <SimpleButton text={'Leave'} func={handleLeave} />
        </div>
      </Section>
    </AuthUser>
  );
}

const mapStateToProps = (state) => ({ loginUser: state.user });
export default connect(mapStateToProps)(Chat);
