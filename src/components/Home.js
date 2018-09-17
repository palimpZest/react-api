import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Tooltip } from 'antd';
import logo from '../icons/r2-d2.png';
import peopleIcon from '../icons/boba_fett_by_radiusss.svg';
import speciesIcon from '../icons/c3po_by_radiusss.svg';
import vehiclesIcon from '../icons/rz_1_a_wing_by_radiusss.svg';
import starshipsIcon from '../icons/tie_fighter_by_radiusss.svg';
import planetIcon from '../icons/geonosis_by_radiusss.svg';
import filmsIcon from '../icons/lightsaber_by_radiusss.svg';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Content>
        <section className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="greeting">Welcome to</h2>
            <h2 className="greeting">React</h2>
            <h2 className="greeting">SWAPI</h2>
          </div>
        </section>
        <section className="about">
          <p className="welcome-message">
            Feel free to browse all the sections!
          </p>
          <div className="avatar-links">
            <Tooltip
              placement="bottom"
              title="People"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/people" activeClassName="selected">
                <Avatar
                  className="avatar-style people-avatar"
                  src={peopleIcon}
                />
              </NavLink>
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Species"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/species" activeClassName="selected">
                <Avatar
                  className="avatar-style species-avatar"
                  src={speciesIcon}
                />
              </NavLink>
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Vehicles"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/vehicles" activeClassName="selected">
                <Avatar
                  className="avatar-style vehicles-avatar"
                  src={vehiclesIcon}
                />
              </NavLink>
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Starships"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/starships" activeClassName="selected">
                <Avatar
                  className="avatar-style starships-avatar"
                  src={starshipsIcon}
                />
              </NavLink>
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Planets"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/planets" activeClassName="selected">
                <Avatar
                  className="avatar-style planets-avatar"
                  src={planetIcon}
                />
              </NavLink>
            </Tooltip>
            <Tooltip
              placement="bottom"
              title="Films"
              overlayClassName="tooltip-style"
            >
              <NavLink to="/films" activeClassName="selected">
                <Avatar className="avatar-style films-avatar" src={filmsIcon} />
              </NavLink>
            </Tooltip>
          </div>
        </section>
      </Content>
    );
  }
}

export default Home;
