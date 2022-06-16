import axios from 'axios';

export async function getGameId(gameName) {
  const {data} = await axios({
    method: 'post',
    url: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    data: {
      name: `${gameName}`,
    },
  });
  const result = data.result
  const id = result.substring(14, result.indexOf(' added.'))
  return id;
}

export async function postUser(id, data) {
  const response = await axios({
    method: 'post',
    url: `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    data,
  });
  console.log(response.data)
  return response;
}

export async function getUsers(id) {
  const users = await axios({
    method: 'get',
    url: `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
  });
  console.log(users.data)
  return users;
}
