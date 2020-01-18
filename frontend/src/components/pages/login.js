import React, {Component} from 'react';
import FormInput from "../react-component/form-input";

class Login extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div className="login-block">
              <i className="fa fa-key"/> Login
              <FormInput label='Email' placeholder="Email here"/>
              <FormInput label='Password' type="password"/>
              <FormInput type="submit" value="Login" className="login-button"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
