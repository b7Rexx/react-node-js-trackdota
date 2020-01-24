import React, {Component} from 'react';
import FormInput from '../react-component/form-input';
import {formatRoute} from 'react-router-named-routes';
import {USER_REGISTER, USER_TOURNAMENT} from '../../constants/routes';
import {Link} from 'react-router-dom';
import {FAILED, LOADING, SUCCESS} from "../../constants/status";
import {connect} from 'react-redux';
import {loginAction, loginValidation, setUserLogin} from "../../actions/user-action";
import {loginUser} from "../../api/server-fetch";

const mapStateToProps = state => {
  return {login: state.user.login};
};

function mapDispatchToProps(dispatch) {
  return {
    loginValidation: (data, that) => dispatch(loginValidation(data, function (payload) {
      if (payload.valid) {
        dispatch(loginAction(payload, LOADING));
        setTimeout(function () {
          loginUser(Object.assign({}, data))
            .then(success => {
              dispatch(setUserLogin(success.data, payload.data.remember));
              dispatch(loginAction(payload, SUCCESS));
              setTimeout(function () {
                that.props.history.push(USER_TOURNAMENT);
              }, 500);
            })
            .catch(error => {
              payload.error = error.response.data.error;
              dispatch(loginAction(payload, FAILED));
            });
        }, 500);
      }
    })),
  };
}


class Login extends Component {
  loginValidation(e) {
    e.preventDefault();
    if (this.props.login.status === LOADING)
      return false;
    let inputValues = [];
    Object.values(e.target.getElementsByTagName('input')).forEach((item) => {
      if (item.getAttribute('name')) {
        if (item.checked)
          inputValues[item.getAttribute('name')] = true;
        else
          inputValues[item.getAttribute('name')] = item.value;
      }
    });
    this.props.loginValidation(inputValues, this);
  }

  rememberChangeHandler(e) {
    e.target.value = e.target.checked;
  }

  render() {
    let propsData = this.props.login.data;
    let propsError = this.props.login.error;
    return (
      <>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-4'>
            <div className='user-block'>
              <div className='title text-center'>
                <i className='fa fa-key'/> Login
              </div>
              <form onSubmit={(e) => this.loginValidation(e)}>
                <FormInput label='Email' name='email' error={propsError.email} defaultValue={propsData.email}
                           placeholder='Email here'/>
                <FormInput label='Password' name='password' error={propsError.password}
                           defaultValue={propsData.password} type='password'/>
                <FormInput label='Remember Me' name='remember' error={propsError.remember} type='checkbox'
                           onChange={this.rememberChangeHandler}/>
                <div className='form-submit'>
                  <FormInput type='submit' icon='fa fa-key' getIcon={this.props.login.status} value='Login'
                             className='login-button'/>
                </div>
              </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
