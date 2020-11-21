import React, { Component } from "react";
import './menu.css';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import { Link, animateScroll as scroll, } from 'react-scroll'
// images
import logoimg from '../../img/logo.png'

const DesktopMenu = () => {
  return (
    <div className='pcc---headerMenu pt-2'>
      <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid container xs={2}>
          <a href="/">
            <img src={logoimg} />
          </a>
        </Grid>
        <Grid 
          container 
          direction="row"
          justify="flex-end"
          xs={10}
        >
          <ul>
          <li>
              <a href='/#about'>About</a>
              {/* <Link href='/#about' to="/#about" spy={true} smooth={true} duration={500}>About</Link> */}
            </li>
            <li>
              <a href='/#why'>Why</a>
              {/* <Link href='/#why' to="why" spy={true} smooth={true} duration={500}>Why</Link> */}
            </li>
            <li>
              <a href='/#road-map'>Road Map</a>
              {/* <Link href='/#road-map' to="road-map" spy={true} smooth={true} duration={500}>Road Map</Link> */}
            </li>
            <li>
              <a href='/#team'>Team</a>
              {/* <Link href='/#team' to="team" spy={true} smooth={true} duration={500}>Team</Link> */}
            </li>
            <li>
              {/* <a href='/packages'>Packages</a> */}
            </li>
            <li>
              <a href='/white-paper'>White Paper</a>
            </li>
            <li>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='/#contact'>Contact</a>
              {/* <Link href='/#contact' to="contact" spy={true} smooth={true} duration={500}>Contact</Link> */}
            </li>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
          </ul>
        </Grid>
        {/* <Grid 
          container 
          xs={2}
          justify="center"
        >
          <a href='#' className="pcc---headermenu-startbtn">Get Started</a>
        </Grid> */}
      </Grid>
      </Container>
    </div> 
  );
}

export default DesktopMenu;
