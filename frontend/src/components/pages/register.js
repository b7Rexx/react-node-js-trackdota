import React, {Component} from 'react';
import FormInput from "../react-component/form-input";
import {Link} from "react-router-dom";
import {formatRoute} from "react-router-named-routes";
import {USER_LOGIN} from "../../constants/routes";
import {connect} from "react-redux";
import {registerAction} from "../../actions/user-action";

const mapStateToProps = state => {
  return state.user.register;
};

function mapDispatchToProps(dispatch) {
  return {
    registerAction: data => dispatch(registerAction(data)),
  };
}

class Register extends Component {
  registerAction(e) {
    e.preventDefault();
    let inputValues = [];
    Object.values(e.target.getElementsByTagName("input")).forEach((item) => {
      if (item.getAttribute('name'))
        inputValues[item.getAttribute('name')] = item.value;
    });
    this.props.registerAction(inputValues);
  }

  getRegisterIcon(){
    console.log(this.props);
    switch (this.props.status) {
// case
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
              <form onSubmit={(e) => this.registerAction(e)}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <FormInput label='First Name' name='firstName' error={propsError.firstName}
                               defaultValue={propsData.firstName}/>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <FormInput label='Last Name' name='lastName' error={propsError.lastName}
                               defaultValue={propsData.lastName}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <FormInput label='Email' name='email' error={propsError.email} defaultValue={propsData.email}/>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <FormInput label='Profile Image' type='file' name='profileImage' error={propsError.profileImage}
                               defaultValue={propsData.profileImage}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <FormInput label='Password' name='password' type='password' error={propsError.password}
                               defaultValue={propsData.password}/>
                  </div>
                  <div className="col-sm-12 col-md-6">
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