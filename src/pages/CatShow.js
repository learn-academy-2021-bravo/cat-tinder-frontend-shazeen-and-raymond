import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default class CatShow extends Component {
  render() {
    return (
      <div className="main-containers">
        <h1>Cat Info</h1>
        {this.props.cat && (
          <>
            <h2>{this.props.cat.name}</h2>
            <p>{this.props.cat.age}</p>
            <p>{this.props.cat.enjoys}</p>
          </>
        )}
        <NavLink to={`/catedit/${this.props.cat.id}`}>
          <Button color="secondary">Edit Cat Profile</Button>
        </NavLink>
      </div>
    );
  }
}
