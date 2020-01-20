import axios from 'axios';
import {getUserToken} from "../store/local-storage";

const SERVER = process.env.REACT_APP_API_URL;

export function registerUser(inputData) {
  delete inputData.profileImage;
  delete inputData.confirmPassword;
  return axios.post(SERVER + '/users/create', inputData);
}

export function loginUser(inputData) {
  delete inputData.remember;
  return axios.post(SERVER + '/auth/login', inputData);
}

export function userTournaments() {
  return axios.get(SERVER + '/tournament/user', {
    headers: {
      'Authorization': getUserToken()
    }
  });
}

export function addTournament(inputData) {
  return axios.post(SERVER + '/tournament/create',
    inputData,
    {
      headers: {
        'Authorization': getUserToken()
      }
    });
}

export function removeTournament(id) {
  return axios.delete(SERVER + '/tournament/' + id,
    {
      headers: {
        'Authorization': getUserToken()
      }
    });
}
