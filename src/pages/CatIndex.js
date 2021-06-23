import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    console.log(cats);
    return (
      <div className="main-containers">
        <h1>All the cats</h1>
        {cats &&
          cats.map((cat) => {
            return (
              <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                <p>{cat.name}</p>
              </NavLink>
            );
          })}
        <NavLink to="/catnew">Create a new cat</NavLink>
      </div>
    );
  }
}
