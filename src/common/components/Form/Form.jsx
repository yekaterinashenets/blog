import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import PostModel from '../../models/PostModel';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class Form extends Component {
  componentDidMount() {
    const { initialData, initialize } = this.props;
    initialData && initialize(initialData);
  }

  render() {
    const { handleSubmit, submitCallback, isRequestPending } = this.props;
    const buttontext = isRequestPending ? 'Loading...' : 'Submit';
    return (
      <form onSubmit={handleSubmit(submitCallback)}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component={renderField} type="text" />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <Field name="text" component={renderField} type="text" />
        </div>
        <div>
          <label htmlFor="email">Author's email</label>
          <Field name="email" component={renderField} type="email" />
        </div>
        <button type="submit">{buttontext}</button>
      </form>
    );
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  initialData: PostModel,
  isRequestPending: PropTypes.bool
};

export default Form;
