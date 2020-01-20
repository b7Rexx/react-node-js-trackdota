export function setUserToken(token) {
  localStorage.setItem('token', token);
}

export function getUserToken() {
  return localStorage.getItem('token');
}

export function setUserData(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserData() {
  return JSON.parse(localStorage.getItem('user'));
}

export function removeUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}