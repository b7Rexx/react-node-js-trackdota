export function setUserToken(token) {
  localStorage.setItem('token', token);
}

export function getUserToken() {
  return localStorage.getItem('token');
}

export function setRememberUser(status) {
  localStorage.setItem('remember', status);
}

export function getRememberUser() {
  return localStorage.getItem('remember');
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
  localStorage.removeItem('remember');
}