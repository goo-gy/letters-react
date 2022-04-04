import React from 'react';

const UserRow = ({ user, handleChangeFollow }) => {
  console.log(user.id);
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {user.name}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
        {user.age}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {user.description}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {user.role}
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          type="button"
          className={`inline-flex items-center justify-center min-w-[100px] rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
            user.following
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }  sm:w-auto`}
          onClick={() => handleChangeFollow(user.id)}
        >
          {user.following ? 'UnFollow' : 'Follow'}
        </button>
      </td>
    </tr>
  );
};

const isEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.user) === JSON.stringify(nextProps.user);
};

export default React.memo(UserRow, isEqual);
