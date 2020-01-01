import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../Actions/index";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    console.log(touched);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  onSubmit = formProps => {
    this.props.createStream(formProps);
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
  console.log("error");
  console.log(errors);
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validation
})(StreamCreate);

export default connect(null, {
  createStream
})(formWrapped);
