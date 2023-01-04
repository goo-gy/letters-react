import React, { useState, useEffect, useRef } from 'react';
import SockJsClient from 'react-stomp';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// local
import Section from 'shared/Section';
import SimpleButton from 'shared/SimpleButton';
import Member from './Component/Member';
import ChatLog from './Component/ChatLog';
import AuthUser from 'shared/AuthUser';

const CHAT_URL = process.env.REACT_APP_CHAT_URL;

function Chat({ loginUser }) {
  const clientRef = useRef({});
  const [message, setMessage] = useState('');
  const [chatLogList, setChatLogList] = useState([]);
  const [roomPeople, setRoomPeople] = useState([]);
  const { roomId } = useParams();

  const navigate = useNavigate();

  const handleSend = () => {
    if (message) {
      const payload = JSON.stringify({
        channel: roomId,
        sender: loginUser.name,
        message: message,
      });
      clientRef.current.sendMessage('/pub/chat', payload);
      setMessage('');
    }
  };

  const handleReceiveMsg = (chatData) => {
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatData]);
  };

  const handleLeave = () => {
    navigate('/chat');
  };

  useEffect(() => {
    if (loginUser.name) {
    }
    return () => {
      if (loginUser.name) {
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
              <div className="flex flex-row gap-2">
                <div className="basis-5/6">
                  <input
                    className="rounded border-2 w-full h-12 bg-white border-componentSky text-componentSky hover:border-pointBlue hover:text-pointBlue dark:border-componentWarm dark:text-componentWarm dark:hover:border-pointWarm dark:hover:text-pointWarm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="basis-1/6">
                  <SimpleButton text={'Send'} func={handleSend} />
                </div>
              </div>
              <SockJsClient
                url={`${CHAT_URL}/letters-chat-server`}
                topics={[`/sub/chat/${roomId}`]}
                onMessage={handleReceiveMsg}
                ref={clientRef}
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
