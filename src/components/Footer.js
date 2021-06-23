import React, { Component } from "react";
import "./footer.css";
import kittyFooter from "../assets/kitty-footer.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Created by Shazeen and Raymond</p>
        <img
          src={kittyFooter}
          alt="kitty with a laptop"
          className="kitty-footer"
        />
      </div>
    );
  }
}
