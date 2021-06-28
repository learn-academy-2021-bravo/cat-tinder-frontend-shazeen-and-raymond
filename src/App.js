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


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.readCat();
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((res) => res.json())
      .then((payload) => {
        console.log(payload);
        this.setState({ cats: payload });
      })
      .catch((errors) => {
        console.log("read errors:", errors);
      });
  };

  createCat = (catObj) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(catObj),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (res.status === 422) {
          console.log("Please check your submission.");
        } else {
          return res.json();
        }
      })
      .then((payload) => this.readCat())
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
    .then(res =>{
      if(res.status === 422){ 
        console.log("check your submission")
      } else {
        return res.json()
      }
    })
    .then(payload => this.readCat())
    .catch((errors) => {
      console.log("update errors:", errors);
    });
  };

  deleteCat = id => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
    .then(res => res.json())
    .then(payload => this.readCat())
    .catch((errors) => {
      console.log("delete errors:", errors);
    });
  }

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
                  return <CatShow cat={cat} deleteCat = {this.deleteCat} />;
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
