import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// local
import actionUser from 'redux/action/user';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProfileBox = ({ signOut }) => {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            // user Image
            src="https://avatars.githubusercontent.com/u/23546441?s=400&u=db7abf2929e5518c12189034dc3fed9bda94f0a6&v=4"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="#"
                onClick={() => {
                  signOut();
                }}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Sign out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(actionUser.signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBox);
