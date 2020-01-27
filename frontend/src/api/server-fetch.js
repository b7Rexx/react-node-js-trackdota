import {axiosFetch, axiosFetchWithToken} from './axios.config';

export function registerUser(inputData) {
  delete inputData.confirmPassword;
  return axiosFetch.post('/users/create', inputData,{
    headers: {
      'content-type': 'multipart/form-data;'
    }
  });
}

export function loginUser(inputData) {
  delete inputData.remember;
  return axiosFetch.post('/auth/login', inputData);
}

export function userTournaments() {
  return axiosFetchWithToken.get('/tournament/user');
}

export function addTournament(inputData) {
  return axiosFetchWithToken.post('/tournament/create', inputData);
}

export function removeTournament(id) {
  return axiosFetchWithToken.delete('/tournament/' + id);
}

export function userGames() {
  return axiosFetchWithToken.get('/tournament/');
}
