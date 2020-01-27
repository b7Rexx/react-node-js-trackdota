import React, {Component} from 'react';
import uuidv1 from 'uuid/v1';
import {FAILED, LOADING, SUCCESS} from "../../constants/status";

class FormInput extends Component {
  getLabel() {
    if (this.props.label)
      return <label htmlFor={this.propsId}>{this.props.label}</label>;
  }

  getInput(className) {
    if (this.props.type === 'submit')
      return (<button type={this.props.type || 'text'}
                      className={className + ' ' + (this.props.className || 'btn-custom')}
                      id={this.props.label ? this.propsId : ''}
                      name={this.props.name}
                      defaultValue={this.props.defaultValue}
                      placeholder={this.props.placeholder}
        >
          <i className={this.getSubmitLoader()}/> {this.props.value}
        </button>
      );

    return (<input type={this.props.type || 'text'}
                   className={className + ' ' + (this.props.className || '')}
                   id={this.props.label ? this.propsId : ''}
                   name={this.props.name}
                   defaultValue={this.props.defaultValue}
                   placeholder={this.props.placeholder}
                   onChange={(e) => {
                     if (typeof this.props.onChange === 'function')
                       this.props.onChange(e);
                   }}
      />
    );
  }

  getError() {
    if (this.props.error)
      return (<span className='error-message'><i className='fa fa-warning'/> {this.props.error}</span>);
  }

  getSubmitLoader() {
    switch (this.props.getIcon) {
      case LOADING:
        return 'fa fa-spinner loading';
      case SUCCESS:
        return 'fa fa-check';
      case FAILED:
        return 'fa fa-times';
      default:
        return this.props.icon || 'fa fa-plus';
    }
  }

  switchFormInput() {
    this.propsId = this.props.id || uuidv1();
    switch (this.props.type) {
      case 'checkbox':
        return (<>
          {this.getInput()}
          {this.getLabel()}
          {this.getError()}
        </>);
      case 'radio':
        return (<>
          {this.getInput()}
          {this.getLabel()}
          {this.getError()}
        </>);
      default:
        return (<>
          {this.getLabel()}
          {this.getInput('form-control')}
          {this.getError()}
        </>);
    }
  }

  render() {
    return (
      <>
        <div className='form-group'>
          {this.switchFormInput()}
        </div>
      </>
    );
  }
}

export default FormInput;
