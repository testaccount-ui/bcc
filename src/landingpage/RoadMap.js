import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import featureImg from '../img/feature.png'
import './landingpage.css'

const RoadMap = () => {
  return (
    <div className="bc---roadMap" id="road-map">
        <Container>
            <Grid
                container
                className="py-5 pl-lg-4"
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                >
                 <h3 className="bc---section_subHeading">Timeline</h3>
                 <h2 className="bc---section_heading">Road Map</h2>
                 <p>Our team is working hard round the clock to stay on top of our project. <br className="d-none d-md-block" />Bananacoin would be nothing without your support. Let's get this ball rolling!</p>
                </Grid>
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    className="mt-4"
                >
                    <img src={featureImg} className="img-fluid" />
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default RoadMap;
