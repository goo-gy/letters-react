import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// local
import Section from 'shared/Section';
import SimpleButton from 'shared/SimpleButton';
import Member from './Component/Member';
import ChatLog from './Component/ChatLog';
import AuthUser from 'shared/AuthUser';

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
  const { roomId } = useParams();

  const navigate = useNavigate();

  const messageDone = () => {
    setMsg('');
  };

  const handleSend = () => {
    if (message) {
      socket.emit(event.message, { room_id: roomId, message }, messageDone);
    }
  };

  const joinDone = ({ success, people, chatList, error_msg }) => {
    if (success) {
      setRoomPeople((prevPeople) => people);
      setChatLogList((prevChatLogList) => chatList);
    } else {
      alert(error_msg);
      navigate('/');
    }
  };

  const handleJoin = () => {
    socket.emit(
      event.joinRoom,
      { token: loginUser.token, user: loginUser, room_id: roomId },
      joinDone
    );
  };

  const authDone = () => {
    handleJoin();
  };

  const handleAuth = () => {
    console.log('token', loginUser.token);
    socket.emit(event.auth, { token: loginUser.token }, authDone);
  };

  const handleReceiveMsg = (chatLog) => {
    console.log('receive', chatLog);
    setChatLogList((prevChatLogList) => [...prevChatLogList, chatLog]);
  };

  console.log(chatLogList);
  const handleReceiveJoin = ({ user, time }) => {
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
    console.log('leave');
    socket.emit(event.leaveRoom, {
      user: loginUser,
      room_id: 'global',
    });
    navigate('/chat');
  };

  useEffect(() => {
    socket.on(event.message, handleReceiveMsg);
    socket.on(event.joinRoom, handleReceiveJoin);
    socket.on(event.leaveRoom, handleReceiveLeave);
    console.log(loginUser);
    if (loginUser.id) {
      handleAuth();
    }
    return () => {
      if (loginUser.id) {
        // TODO : active 상태 변경
        // handleLeave();
      }
      socket.off(event.message, handleReceiveMsg);
      socket.off(event.joinRoom, handleReceiveJoin);
      socket.off(event.leaveRoom, handleReceiveLeave);
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
