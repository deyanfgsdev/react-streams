import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="stream-create">
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream: createStream })(StreamCreate);
