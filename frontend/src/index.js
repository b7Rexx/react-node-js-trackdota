import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/reset.css';
import './styles/style.css';
import './styles/media.css';

import App from './App';
import {Provider} from "react-redux";
import store from "./store/redux";

/**
 * load env variables
 */
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
