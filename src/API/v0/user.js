import { request } from 'graphql-request';

const url = process.env.REACT_APP_API_URL;

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
    const result = await request(url, query);
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
    const result = await request(url, query);
    const data = await result;
    return data.signIn;
  } catch (error) {
    return error;
  }
}

// mutate

//

export default { getUsers, signIn };
