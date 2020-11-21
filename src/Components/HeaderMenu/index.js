import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'

// imports files
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

// images

const HeaderMenu = () => {
  return (
    <div>
      <DesktopMenu />
      <MobileMenu />
    </div> 
  );
}

export default HeaderMenu;
