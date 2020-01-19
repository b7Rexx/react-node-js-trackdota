import React, {Component} from 'react';
import uuidv1 from 'uuid/v1';

class FormInput extends Component {
  getLabel() {
    if (this.props.label)
      return <label htmlFor={this.propsId}>{this.props.label}</label>;
  }

  getInput(className) {
    if (this.props.type === 'submit')
      return (<button type={this.props.type || 'text'}
                      className={className + ' ' + this.props.className || ''}
                      id={this.props.label ? this.propsId : ''}
                      name={this.props.name}
                      defaultValue={this.props.defaultValue}
                      placeholder={this.props.placeholder}
        >
          {this.props.icon ? (<i className={this.props.icon}/>) : ''} {this.props.value}
        </button>
      );

    return (<input type={this.props.type || 'text'}
                   className={className + ' ' + this.props.className || ''}
                   id={this.props.label ? this.propsId : ''}
                   name={this.props.name}
                   defaultValue={this.props.defaultValue}
                   placeholder={this.props.placeholder}
      />
    );
  }

  getError() {
    if (this.props.error)
      return (<span className='error-message'><i className='fa fa-warning'/> {this.props.error}</span>);
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
