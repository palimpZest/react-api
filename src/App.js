import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import FilmsHolder from './components/FilmsHolder';
import PeopleHolder from './components/PeopleHolder';
import SpeciesHolder from './components/SpeciesHolder';
import VehiclesHolder from './components/VehiclesHolder';
import StarshipsHolder from './components/StarshipsHolder';
import PlanetsHolder from './components/PlanetsHolder';
import PeopleShowItem from './components/routes/PeopleShowItem';
import PlanetsShowItem from './components/routes/PlanetsShowItem';
import SpeciesShowItem from './components/routes/SpeciesShowItem';
import StarshipsShowItem from './components/routes/StarshipsShowItem';
import VehiclesShowItem from './components/routes/VehiclesShowItem';
import FilmsShowItem from './components/routes/FilmsShowItem';
import NotFound from './components/routes/NotFound';
import './App.css';
import { BackTop } from 'antd';
import arrow from './play-button.svg';
import { Row } from 'antd';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Header>
            <Row
              type="flex"
              justify="space-around"
              gutter={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 8, xxl: 32 }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                style={{
                  lineHeight: '64px',
                  backgroundColor: 'black',
                  color: 'blue'
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
            </Row>
            <BackTop>
              <img src={arrow} alt="arrow up" className="ant-back-top-inner" />
            </BackTop>
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={PeopleHolder} />
            <Route path="/people/:id" component={PeopleShowItem} />
            <Route exact path="/species" component={SpeciesHolder} />
            <Route path="/species/:id" component={SpeciesShowItem} />
            <Route exact path="/vehicles" component={VehiclesHolder} />
            <Route path="/vehicles/:id" component={VehiclesShowItem} />
            <Route exact path="/starships" component={StarshipsHolder} />
            <Route path="/starships/:id" component={StarshipsShowItem} />
            <Route exact path="/planets" component={PlanetsHolder} />
            <Route path="/planets/:id" component={PlanetsShowItem} />
            <Route exact path="/films" component={FilmsHolder} />
            <Route path="/films/:id" component={FilmsShowItem} />
            <Route component={NotFound} />
          </Switch>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
