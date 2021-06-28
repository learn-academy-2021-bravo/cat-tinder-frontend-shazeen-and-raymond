import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Card, Button, CardTitle, Row, Col } from "reactstrap";

import "./catShow.css"

export default class CatShow extends Component {
  handleDelete = () => {
    this.props.deleteCat(this.props.cat.id);
  };

  render() {
    return (
      <div className="main-containers">
        <h1>Cat Info</h1>
       
        <Row key={this.props.cat.id}>
                  <Col sm="50">
                    <Card body>
                      <CardTitle tag="h2">{this.props.cat.name}</CardTitle>
                      <h2>🐈‍⬛</h2>
                      {this.props.cat && (
                       <>
                        <p className="cat-info">{this.props.cat.age}</p>
                        <p className="cat-info">{this.props.cat.enjoys}</p>
                      </>
                      )}
                    </Card>
                  </Col>
                </Row>
        <div className="cat-card">
        <NavLink to={`/catedit/${this.props.cat.id}`}>
          <Button color="secondary">Edit Cat Profile</Button>
        </NavLink>
        <NavLink to="/catindex">
          <Button onClick={this.handleDelete} color="danger">
            Delete Cat Profile
          </Button>
        </NavLink>              
        </div>
      </div>
    );
  }
}
