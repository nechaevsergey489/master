import React from "react";

export default class CarDetail extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.match.params.name}1</h1>
      </div>
    );
  }
}
