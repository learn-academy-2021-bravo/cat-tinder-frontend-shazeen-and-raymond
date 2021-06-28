import React from "react";
import "./home.css";
import { Jumbotron, Container, NavLink, Button } from "reactstrap";

export default function Home() {
  return (
    <div className="main-containers">
      <div className="home">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome to Cat Tinder</h1>
            <p className="lead">Get all your cats' needs met here!</p>
            <div className="home">
              <NavLink href="/catindex">
                <Button outline color="success">
                  Meet All The Cats
                </Button>
              </NavLink>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}
