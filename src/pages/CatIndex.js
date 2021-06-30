import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button, CardTitle, Row, Col } from "reactstrap";

//import catLogo from "../assets/cat-logo.png";
import "./styles/catIndex.css";

export default class CatIndex extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div className="main-containers">
        <h1 className="catindex-title">All the cats</h1>
        <div className="cat-card">
          {cats &&
            cats.map((cat) => {
              return (
                <Row key={cat.id}>
                  <Col sm="15">
                    <Card body>
                      <CardTitle tag="h5">{cat.name}</CardTitle>
                      <h2>🐈‍⬛</h2>
                      <NavLink to={`/catshow/${cat.id}`}>
                        <Button outline color="success">
                          More Info Here
                        </Button>
                      </NavLink>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>

        <div className="createnewcat">
          <NavLink to="/catnew">
            <Button outline color="warning">
              Create a new cat
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
