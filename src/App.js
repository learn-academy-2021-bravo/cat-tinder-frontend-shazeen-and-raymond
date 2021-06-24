import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Pages routes
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//Mock Cat data
import mockcats from "./mockCats";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: mockcats,
    };
  }
  createCat = (catForm) => {
    console.log(catForm);
  };

  updateCat = (cat, id) => {
    console.log("cat:", cat);
    console.log("id:", id);
  };

  render() {
    return (
      <div className="app">
        <Router>
          <section>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/catindex"
                render={(props) => <CatIndex cats={this.state.cats} />}
              />
              <Route
                path="/catshow/:id"
                render={(props) => {
                  let id = props.match.params.id;
                  let cat = this.state.cats.find((cat) => cat.id === +id);
                  return <CatShow cat={cat} />;
                }}
              />
              <Route
                path="/catnew"
                render={(props) => {
                  return <CatNew createCat={this.createCat} />;
                }}
              />
              <Route
                path="/catedit/:id"
                render={(props) => {
                  let id = props.match.params.id;
                  let cat = this.state.cats.find((cat) => cat.id === +id);
                  return <CatEdit updateCat={this.updateCat} cat={cat} />;
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </section>
          <Footer />
        </Router>
      </div>
    );
  }
}
