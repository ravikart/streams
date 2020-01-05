import React from "react";
import Model from "../model";
import history from "../../history";
import { fetchStream, deleteStream } from "../../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  };
  deleteStream = () => {
    const id = this.props.match.params.id;
    this.props.deleteStream(id);
  };
  actions = () => {
    return (
      <>
        <button onClick={this.deleteStream} className="ui button negative">
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  };
  renderContent = () => {
    if (!this.props.streamValue) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete: ${this.props.streamValue.title}`;
  };
  render = () => {
    return (
      <div>
        Stream Delete
        <Model
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.actions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { streamValue: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);
