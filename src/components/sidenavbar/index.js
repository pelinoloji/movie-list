import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  /* Write the necessary functions to show/hide the side bar on mobile devices */
  constructor(props) {
    super(props);
    this.state = false;
  }

  render() {
    const { activeSideBar } = this.state;

    return (
      <SideNavBarCont className={activeSideBar && "visible"}>
        {/* Implement a hamburger icon slide in effect for mobile devices */}
        <SideNavMainLink
          className="menu_nav_link main_nav_link"
          to="/"
          activeClassName="active"
          exact
        >
          Dashboard
          <NavIcon image={Arrow}></NavIcon>
        </SideNavMainLink>
        <SideNavMainLink
          className="menu_nav_link"
          to="/discover"
          activeClassName="active"
        >
          Discover
          <NavIcon image={SearchWhite}></NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/watched/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/watched/tv-shows"
          activeClassName="active"
        >
          Tv Shows
        </NavLink>
        <SideNavHeader>
          <br />
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/saved/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/saved/tv-shows"
          activeClassName="active"
        >
          Tv Shows
        </NavLink>
      </SideNavBarCont>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;

  &:hover {
    background-color: ${colors.primaryColor};
  }
`;

const NavIcon = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  width: 35px;
  height: calc(1.6rem);
  align-self: center;
  background-repeat: no-repeat;
  background-position: center;
`;

const SideNavHeader = styled.div`
  margin-right: 0 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const HeaderText = styled.div`
  margin: 25px 0 25px 35px;
  border-bottom: 1px solid white;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  margin: 25px 35px;
`;
