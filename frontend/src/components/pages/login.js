import React, {Component} from 'react';
import FormInput from '../react-component/form-input';
import {formatRoute} from 'react-router-named-routes';
import {USER_PROFILE, USER_REGISTER} from '../../constants/routes';
import {Link} from 'react-router-dom';
import {FAILED, LOADING, SUCCESS} from "../../constants/status";
import {connect} from 'react-redux';
import {loginAction, loginValidation, setUserLogin} from "../../actions/user-action";
import {loginUser} from "../../api/user-middleware";

const mapStateToProps = state => {
  return state.user.login;
};

function mapDispatchToProps(dispatch) {
  return {
    loginValidation: (data, that) => dispatch(loginValidation(data, function (payload) {
      if (payload.valid) {
        dispatch(loginAction(payload, LOADING));
        setTimeout(function () {
          loginUser(Object.assign({}, data))
            .then(success => {
              dispatch(loginAction(payload, SUCCESS));
              dispatch(setUserLogin(success.data));
              setTimeout(function () {
                that.props.history.push(USER_PROFILE);
              }, 500);
            })
            .catch(error => {
              dispatch(loginAction(payload, FAILED));
            });
        }, 1000);
      }
    })),
  };
}


class Login extends Component {
  loginValidation(e) {
    e.preventDefault();
    let inputValues = [];
    Object.values(e.target.getElementsByTagName('input')).forEach((item) => {
      if (item.getAttribute('name'))
        inputValues[item.getAttribute('name')] = item.value;
    });
    this.props.loginValidation(inputValues, this);
  }

  getLoginIcon() {
    switch (this.props.status) {
      case LOADING:
        return 'fa fa-spinner loading';
      case SUCCESS:
        return 'fa fa-check';
      case FAILED:
        return 'fa fa-times';
      default:
        return 'fa fa-key';
    }
  }

  render() {
    let propsData = this.props.data;
    let propsError = this.props.error;
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
                <FormInput label='Remember Me' name='remember' error={propsError.remember}
                           defaultValue={propsData.remember} type='checkbox'/>
                <div className='form-submit'>
                  <FormInput type='submit' icon={this.getLoginIcon()} value='Login' className='login-button'/>
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
