import React from 'react';
import Modal from 'shared/Modal';

import { useNavigate } from 'react-router-dom';

const RoomRow = ({ room }) => {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/chat/${room.id}`);
  };

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {room.name}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {room.description}
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <Modal
          buttonText="join"
          title={room.name}
          message={'입장하시겠습니까?'}
          action={handleJoin}
        />
      </td>
    </tr>
  );
};

const isEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.room) === JSON.stringify(nextProps.room);
};

export default React.memo(RoomRow, isEqual);
