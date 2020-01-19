import axios from 'axios';

const SERVER = process.env.REACT_APP_API_URL;

//
// function logger({ getState }) {
//   return next => action => {
//     console.log('will dispatch', action)
//     // Call the next dispatch method in the middleware chain.
//     const returnValue = next(action)
//     console.log('state after dispatch', getState())
//     // This will likely be the action itself, unless
//     // a middleware further in chain changed it.
//     return returnValue
//   }
// }

export function registerUser(inputData) {
  delete inputData.profileImage;
  delete inputData.confirmPassword;
  return axios.post(SERVER + '/users/create', inputData)
}
