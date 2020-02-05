import React, { Component, Fragment } from "react";

import PaddockContainer from "./PaddockContainer";
import DinosaurContainer from "./DinosaurContainer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DinosaurCreateForm from "../components/dinosaurs/DinosaurCreateForm";

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Router>
          <div className="mainBody">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dinosaurs" component={DinosaurContainer} />
              <Route path="/paddocks" component={PaddockContainer} />
              <Route path="/species" component={DinosaurCreateForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
