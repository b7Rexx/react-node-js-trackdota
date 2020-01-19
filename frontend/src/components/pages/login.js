import React, {Component} from 'react';
import FormInput from '../react-component/form-input';
import {formatRoute} from 'react-router-named-routes';
import {USER_REGISTER} from '../../constants/routes';
import {Link} from "react-router-dom";

class Login extends Component {
  loginAction() {

  }

  render() {
    return (
      <>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-4'>
            <div className='user-block'>
              <div className='title text-center'>
                <i className='fa fa-key'/> Login
              </div>
              <FormInput label='Email' name='email' placeholder='Email here'/>
              <FormInput label='Password' name='password' type='password'/>
              <FormInput label='Remember Me' name='remember' type='checkbox'/>
              <div className='form-submit'>
                <FormInput type='submit' value='Login' className='login-button'/>
              </div>
              <br/>
              <div className='link text-center'>
                <Link to={formatRoute(USER_REGISTER)}><i className='fa fa-user-plus'/> Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
