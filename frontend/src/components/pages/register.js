import React, {Component} from 'react';
import FormInput from '../react-component/form-input';
import {Link} from 'react-router-dom';
import {formatRoute} from 'react-router-named-routes';
import {USER_LOGIN} from '../../constants/routes';
import {connect} from 'react-redux';
import {registerAction, registerValidation} from '../../actions/user-action';
import {FAILED, SUCCESS, LOADING} from '../../constants/status';
import {registerUser} from '../../api/user-middleware';

const mapStateToProps = state => {
  return state.user.register;
};

function mapDispatchToProps(dispatch) {
  return {
    registerValidation: data => dispatch(registerValidation(data, function (payload) {
      if (payload.valid) {
        dispatch(registerAction(payload, LOADING));
        setTimeout(function () {
          registerUser(Object.assign({}, data))
            .then(success => {
              dispatch(registerAction(payload, SUCCESS));
            })
            .catch(error => {
              dispatch(registerAction(payload, FAILED));
            });
        }, 1000);
      }
    })),
  };
}

class Register extends Component {
  registerValidation(e) {
    e.preventDefault();
    let inputValues = [];
    Object.values(e.target.getElementsByTagName('input')).forEach((item) => {
      if (item.getAttribute('name'))
        inputValues[item.getAttribute('name')] = item.value;
    });
    this.props.registerValidation(inputValues);
  }

  getRegisterIcon() {
    switch (this.props.status) {
      case LOADING:
        return 'fa fa-spinner loading';
      case SUCCESS:
        return 'fa fa-check';
      case FAILED:
        return 'fa fa-times';
      default:
        return 'fa fa-user-plus';
    }
  }

  render() {
    let propsData = this.props.data;
    let propsError = this.props.error;
    return (
      <>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-8'>
            <div className='user-block'>
              <div className='title text-center'>
                <i className='fa fa-user-plus'/> Register
              </div>
              <form onSubmit={(e) => this.registerValidation(e)}>
                <div className='row'>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='First Name' name='firstName' error={propsError.firstName}
                               defaultValue={propsData.firstName}/>
                  </div>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='Last Name' name='lastName' error={propsError.lastName}
                               defaultValue={propsData.lastName}/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='Email' name='email' error={propsError.email} defaultValue={propsData.email}/>
                  </div>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='Profile Image' type='file' name='profileImage' error={propsError.profileImage}
                               defaultValue={propsData.profileImage}/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='Password' name='password' type='password' error={propsError.password}
                               defaultValue={propsData.password}/>
                  </div>
                  <div className='col-sm-12 col-md-6'>
                    <FormInput label='Confirm Password' name='confirmPassword' type='password'
                               error={propsError.confirmPassword} defaultValue={propsData.confirmPassword}/>
                  </div>
                </div>
                <div className='form-submit'>
                  <FormInput type='submit' icon={this.getRegisterIcon()} value='Register' className='login-button'/>
                </div>
              </form>
              <br/>
              <div className='link text-center'>
                <Link to={formatRoute(USER_LOGIN)}><i className='fa fa-key'/> Login</Link>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);