import { request } from 'graphql-request';

const API_URL = process.env.REACT_APP_API_URL;

// query
async function getUsers() {
  const query = `
    query {
      users {
        id,
        email,
        name
      }
    }
  `;
  try {
    const result = await request(API_URL, query);
    const data = await result;
    return data.users;
  } catch (error) {
    return error;
  }
}

async function signIn({ email, password }) {
  try {
    const query = `
      query {
        signIn (email:"${email}", password: "${password}") {
          id,
          email,
          name,
          token
        }
      }
    `;
    const data = await request(API_URL, query);
    return data.signIn;
  } catch (error) {
    return error;
  }
}

async function signUp({ email, name, password }) {
  try {
    const query = `
    mutation {
        signUp (email:"${email}", name: "${name}", password: "${password}")
      }
    `;
    const result = await request(API_URL, query);
    const data = await result;
    return data.signUp;
  } catch (error) {
    return error;
  }
}

export default { getUsers, signIn, signUp };
