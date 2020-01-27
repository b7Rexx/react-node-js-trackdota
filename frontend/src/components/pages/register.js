import React, {Component} from 'react';
import FormInput from '../react-component/form-input';
import {USER_LOGIN} from '../../constants/routes';
import {connect} from 'react-redux';
import {registerAction, registerValidation} from '../../actions/user-action';
import {FAILED, SUCCESS, LOADING} from '../../constants/status';
import {registerUser} from '../../api/server-fetch';

const mapStateToProps = state => {
  return {register: state.user.register};
};

function mapDispatchToProps(dispatch) {
  return {
    registerValidation: (data, that) => dispatch(registerValidation(data, function (payload) {

      if (payload.valid) {
        dispatch(registerAction(payload, LOADING));
        setTimeout(function () {
          registerUser(data)
            .then(success => {
              dispatch(registerAction(payload, SUCCESS));
              that.props.history.push(USER_LOGIN);
            })
            .catch(error => {
              payload.error = error.response.data.error;
              dispatch(registerAction(payload, FAILED));
            });
        }, 500);
      }
    })),
  };
}

class Register extends Component {
  registerValidation(e) {
    e.preventDefault();

    if (this.props.register.status === LOADING)
      return false;
    let inputValues = new FormData();
    Object.values(e.target.getElementsByTagName('input')).forEach((item) => {
      if (item.getAttribute('type') === 'file') {
        if (item.value) {
          inputValues.append(item.getAttribute('name'), item.files[0]);
        }
      } else {
        if (item.getAttribute('name'))
          inputValues.append(item.getAttribute('name'), item.value);
      }
    });
    this.props.registerValidation(inputValues, this);
  }

  render() {
    let propsData = this.props.register.data;
    let propsError = this.props.register.error;
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
                    <FormInput label='Profile Image' type='file' name='profileImage' error={propsError.profileImage}/>
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
                  <FormInput type='submit' icon='fa fa-user-plus' getIcon={this.props.register.status} value='Register'/>
                </div>
              </form>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
