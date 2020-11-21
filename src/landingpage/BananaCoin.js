import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Countnumber from '../Components/countdown/App'
import bananaimage from '../img/bananacoin.png'
import './landingpage.css'

const Bananacoin = () => {
  return (
    <div className="bc---bananacoin" id="about">
        <Container>
            <Grid
                container
            >
                <Grid 
                    container 
                    xs={12}
                    md={6}
                    className="mt-5 my-md-5 py-md-5 px-5"
                >
                    <img src={bananaimage} className="img-fluid" />
                </Grid>
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    md={6}
                    className="my-5 py-md-5 pl-lg-4"
                >
                 <h3 className="bc---section_subHeading">What is bananacoin</h3>
                 <h2 className="bc---section_heading">The foundation for our <br className="d-none d-md-block" />digital future.</h2>
                 <p>Bananacoin is a decentralized cryptocurrency that is aimed at rewarding early adopters and becoming a useful currency in web development. Bananacoin strives for excellence with a community governed playbook. We believe in giving back to the community with what we have and Bananacoin does just that.</p>
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default Bananacoin;
