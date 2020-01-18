import React, {Component} from 'react';
import uuidv1 from 'uuid/v1';

class FormInput extends Component {
  render() {
    let props = this.props;
    let propsId = props.id || uuidv1();
    return (
      <>
        <div className="form-group">
          {props.label ? <label htmlFor={propsId}>{props.label}</label> : ''}
          <input type={props.type || 'text'}
                 className={"form-control " + props.className || ''}
                 id={propsId}
                 value={props.value}
                 placeholder={props.placeholder}
          />
        </div>
      </>
    );
  }
}

export default FormInput;