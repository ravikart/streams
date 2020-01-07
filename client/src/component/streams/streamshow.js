import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../Actions";

class StreamShow extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  };
  render = () => {
    if (!this.props.stream) {
      return <div></div>;
    }
    const stream = this.props.stream;
    return (
      <div>
        <h1> {stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
