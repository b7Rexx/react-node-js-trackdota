import axios from 'axios';

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
