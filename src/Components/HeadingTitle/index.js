import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import './headingTitle.css'

const HeadingTitle = (props) => {
  return (
    <div className="bc---headingTitle">
        <Container>
            <Grid
                container
                className="py-md-5"
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="center"
                    xs={12}
                >
                 <h2 className="bc---section_heading text-dark text-center mt-5 text-capitalize">{props.pagetitle}</h2>
                 <p className=" text-dark text-center" style={{color:"black",backgroundColor:"#ffcc0f",width:"700px"}}>The team behind Bananacoin has created amazing products and services over the past few years. Below you can observe some of your projects. Our skillset extends from web and mobile development to aritificial intelligence and blockhain services. Learn more about our work here.</p>
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default HeadingTitle;
