import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function ChatLog({ chatLogList, loginUser }) {
  useEffect(() => {
    const divChat = document.getElementById('chat_log');
    divChat.scrollTop = divChat.scrollHeight;
  }, [chatLogList]);

  console.log(chatLogList);
  return (
    <div id="chat_log" className="max-h-[60vh] overflow-y-scroll">
      <ul className="divide-y divide-componentSky dark:divide-componentWarm p-5">
        {chatLogList.map((chatLog, index) => (
          <li key={index} className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src={
                  chatLog.image
                    ? chatLog.image
                    : 'https://avatars.githubusercontent.com/u/23546441?s=400&u=db7abf2929e5518c12189034dc3fed9bda94f0a6&v=4'
                }
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-sm font-bold ${
                      chatLog.sender === loginUser.name
                        ? ' text-violet-700 dark:text-violet-700'
                        : 'text-componentSky dark:text-componentWarm'
                    }`}
                  >
                    {chatLog.sender}
                  </h3>
                  <p className="text-sm text-gray-500">{chatLog.time}</p>
                </div>
                <p className="text-sm ">{chatLog.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ loginUser: state.user });
export default connect(mapStateToProps)(ChatLog);
