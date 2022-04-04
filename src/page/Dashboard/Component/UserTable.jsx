import React, { useState, useCallback } from 'react';
import UserRow from './UserRow';

const UserTable = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'Googy',
      age: 25,
      description: 'Be Happy',
      role: 'develop',
      following: false,
    },
    {
      id: 1,
      name: 'ABC',
      age: 3,
      description: 'ABC@ABC.com',
      role: 'market',
      following: false,
    },
    {
      id: 2,
      name: 'Grace',
      age: 22,
      description: 'Clean & Jerk',
      role: 'workout',
      following: false,
    },
    {
      id: 3,
      name: 'Holiday',
      age: 1,
      description: 'Too short',
      role: 'rest',
      following: false,
    },
  ]);

  const handleChangeFollow = (id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, following: !user.following } : user
      )
    );
  };

  const handleCreateRandomUser = () => {
    const user = {
      id: users.length,
      name: 'random',
      age: 0,
      description: '"random@random.com"',
      role: 'rand',
      following: false,
    };
    setUsers((users) => users.concat(user));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">Hi everyone!</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={handleCreateRandomUser}
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Age
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Role
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Follow</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {users.map((user, index) => (
              <UserRow
                key={index}
                user={user}
                handleChangeFollow={handleChangeFollow}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
