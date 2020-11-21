import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';

// import MediumIcon from '@material-ui/icons/MediumOutlined';


import './footer.css'
// images
import logoimg from '../../img/logo.png'

const Footer = (props) => {
  return (
    <div className="pcc---headerMenu pcc---gray_background pcc---footer d-block">
        <Container maxWidth="lg">
        <Grid
            container
            direction="row"
            justify="flex-start"
            xs={11}
            className="bg-Yello mx-auto"
            >
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    xs={12}
                    sm={6}
                    className="mt-lg-4 py-lg-5 pt-5 px-4"
                    >
                       <h2 className="text-left">Its all about the voice of the <br className="d-none d-lg-block" />people - the community.</h2> 
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    xs={12}
                    sm={6}
                    className="mt-lg-4 py-5 px-4"
                    >
                        <form className="Footer---form">
                            <div>
                                <input type="email" className="email" placeholder="Enter your email address" />
                                <button type="submit" className="submit">Get Started</button>
                                <p className="text-dark mt-2 text-left d-none">SUBSCRIBE TO OUR NEWS LETTER</p>
                            </div> 
                        </form> 
                </Grid>
            </Grid>
        </Container>
        <Container 
            maxWidth="xl"
            className="py-5"
        >
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid container xs={12} sm={2}>
            <a href="#">
                <img src={logoimg} />
            </a>
            </Grid>
            <Grid 
            container 
            direction="row"
            justify="center"
            xs={8}
            className="d-none d-lg-flex"
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
                  {/* <li>
                    <a href='/packages'>Packages</a>
                  </li> */}
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
            <Grid 
            container 
            xs={12} 
            sm={2}
            justify="center"
            >
              <a href='https://t.me/bananacoinFinance' target="_blank" className="pcc---footer-menu-icons"><TelegramIcon /></a>
              <a href='https://twitter.com/Banana4Coin' target="_blank" className="pcc---footer-menu-icons"><TwitterIcon /></a>
              {/* <a href='https://medium.com/@vinayk217782/2b9d93418b51' target="_blank" className="pcc---footer-menu-icons"><MediumIcon /></a> */}
            </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default Footer;
