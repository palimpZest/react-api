import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import PeopleHolder from "./components/PeopleHolder";
import SpeciesHolder from "./components/SpeciesHolder";
import VehiclesHolder from "./components/VehiclesHolder";
import StarshipsHolder from "./components/StarshipsHolder";
import PlanetsHolder from "./components/PlanetsHolder";
import "./App.css";
import { BackTop } from "antd";
import arrow from "./play-button.svg";
import { Row } from "antd";
import { Layout, Menu } from "antd";
const { Header } = Layout;

class App extends Component {
  render() {
    return <BrowserRouter>
        <nav>
          <Switch>
            <Header>
              <Row type="flex" justify="space-around" gutter={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 8, xxl: 32 }}>
                <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px", backgroundColor: "black", color: "green" }}>
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
                </Menu>
              </Row>
              <BackTop>
                <img src={arrow} alt="arrow up" className="ant-back-top-inner" />
              </BackTop>
            </Header>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={PeopleHolder} />
          <Route path="/species" component={SpeciesHolder} />
          <Route path="/vehicles" component={VehiclesHolder} />
          <Route path="/starships" component={StarshipsHolder} />
          <Route path="/planets" component={PlanetsHolder} />
        </nav>
      </BrowserRouter>;
  }
}

export default App;
