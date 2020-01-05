import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  onSubmit = formProps => {
    this.props.onSubmit(formProps);
  };

  render = () => {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Enter the Title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter the Description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
}

const validation = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "Description is missing!!";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamForm",
  validate: validation
})(StreamForm);

export default formWrapped;
