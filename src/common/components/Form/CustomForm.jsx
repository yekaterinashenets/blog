import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';

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

export const CreateForm = reduxForm({
  form: 'creating',
  validate: validate
})(Form);

export const EditForm = reduxForm({
  validate: validate
})(Form);
