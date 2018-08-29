import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './styles.scss';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.text) {
    errors.text = 'Required';
  }
  return errors;
};

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

let CreatingForm = props => {
  const { handleSubmit, addPost } = props;
  return (
    <form onSubmit={handleSubmit(addPost)}>
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
      <button type="submit">Submit</button>
    </form>
  );
};

CreatingForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

CreatingForm = reduxForm({
  form: 'creating',
  validate: validate
})(CreatingForm);

export default CreatingForm;
