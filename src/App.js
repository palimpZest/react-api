import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import { BackTop, Layout, Menu } from "antd";

import Home from "./components/Home";
import FilmsHolder from "./components/FilmsHolder";
import PeopleHolder from "./components/PeopleHolder";
import SpeciesHolder from "./components/SpeciesHolder";
import VehiclesHolder from "./components/VehiclesHolder";
import StarshipsHolder from "./components/StarshipsHolder";
import PlanetsHolder from "./components/PlanetsHolder";
import PeopleShowItem from "./components/routes/PeopleShowItem";
import PlanetsShowItem from "./components/routes/PlanetsShowItem";
import SpeciesShowItem from "./components/routes/SpeciesShowItem";
import StarshipsShowItem from "./components/routes/StarshipsShowItem";
import VehiclesShowItem from "./components/routes/VehiclesShowItem";
import FilmsShowItem from "./components/routes/FilmsShowItem";
import ScrollToTop from "./components/routes/ScrollToTop";
import NotFound from "./components/routes/NotFound";

import "./App.css";

import arrow from "./icons/play-button.svg";

const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Header className="header-style">
            <Menu
              theme="dark"
              mode="horizontal"
              style={{
                backgroundColor: "black",
                color: "#ffd900",
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap",
              }}
            >
              <Menu.Item key="1">
                <NavLink exact to="/" activeClassName="selected">
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/people" activeClassName="selected">
                  People
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/species" activeClassName="selected">
                  Species
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/vehicles" activeClassName="selected">
                  Vehicles
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                <NavLink to="/starships" activeClassName="selected">
                  Starships
                </NavLink>
              </Menu.Item>
              <Menu.Item key="6">
                <NavLink to="/planets" activeClassName="selected">
                  Planets
                </NavLink>
              </Menu.Item>
              <Menu.Item key="7">
                <NavLink exact to="/films" activeClassName="selected">
                  Films
                </NavLink>
              </Menu.Item>
            </Menu>

            <BackTop>
              <img
                src={arrow}
                alt="arrow up"
                className="ant-inner ant-back-top-inner"
              />
            </BackTop>
          </Header>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/people" component={PeopleHolder} />
              <Route path="/people/:id(\d+)" component={PeopleShowItem} />
              <Route exact path="/species" component={SpeciesHolder} />
              <Route path="/species/:id(\d+)" component={SpeciesShowItem} />
              <Route exact path="/vehicles" component={VehiclesHolder} />
              <Route path="/vehicles/:id(\d+)" component={VehiclesShowItem} />
              <Route exact path="/starships" component={StarshipsHolder} />
              <Route path="/starships/:id(\d+)" component={StarshipsShowItem} />
              <Route exact path="/planets" component={PlanetsHolder} />
              <Route path="/planets/:id(\d+)" component={PlanetsShowItem} />
              <Route exact path="/films" component={FilmsHolder} />
              <Route path="/films/:id(\d+)" component={FilmsShowItem} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </nav>
      </BrowserRouter>
    );
  }
}

const Footer = () => {
  return <div className="footer" />;
};

export default App;
