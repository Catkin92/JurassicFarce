import React, { Component } from "react";
import SideBar from "./SideBar"
import PaddockContainer from "./PaddockContainer";
import DinosaurContainer from "./DinosaurContainer";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DinosaurCreateForm from "../components/dinosaurs/DinosaurCreateForm";
import SideBarDino from "../components/dinosaurs/SideBarDino";
import SideBarPaddock from "../components/paddocks/SideBarPaddock";
import SideBarSpecies from "../components/species/SideBarSpecies";

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
        <div className="trackerContainer">
          <SideBar>
            {/* <SideBarDino/>
            <SideBarPaddock/>
            <SideBarSpecies/> */}
          </SideBar>
        </div>
      </div>
       
    );
  }
}

export default Main;
