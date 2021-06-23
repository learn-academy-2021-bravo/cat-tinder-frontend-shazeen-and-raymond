import React, { Component } from "react";

export default class CatShow extends Component {
  render() {
    return (
      <div className="main-containers">
        <h1>{this.props.cat.name}</h1>
        <p>{this.props.cat.age}</p>
        <p>{this.props.cat.enjoys}</p>
      </div>
    );
  }
}
