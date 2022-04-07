const ChatLog = ({ chatLogList }) => {
  return (
    <div>
      <ul
        role="list"
        className="divide-y divide-componentSky dark:divide-componentWarm"
      >
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
                  <h3 className="text-sm font-bold text-componentSky dark:text-componentWarm">
                    {chatLog.userName}
                  </h3>
                  <p className="text-sm text-gray-500">{chatLog.time}</p>
                </div>
                <p className="text-sm ">{chatLog.msg}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatLog;