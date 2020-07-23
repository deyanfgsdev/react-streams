import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div className="stream-edit">
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")} // Other option => initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps => props from component
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  editStream: editStream,
})(StreamEdit);
