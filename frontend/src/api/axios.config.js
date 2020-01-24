import axios from 'axios';
import {getUserToken} from "../store/local-storage";

const SERVER = process.env.REACT_APP_API_URL;

export let axiosFetch = axios.create({
  baseURL: SERVER,
});

export let axiosFetchWithToken = axios.create({
  baseURL: SERVER,
  headers: {
    Authorization: getUserToken()
  }
});
