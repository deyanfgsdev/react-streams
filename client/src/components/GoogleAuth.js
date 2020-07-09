import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client.init({
        clientId:
          "188546086282-qanni1qp01llkliu1hr65rdqcs4odj03.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
