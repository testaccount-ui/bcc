import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureCard from '../Components/Featurescards/index'
import decentralized from '../img/decentralized.png'
import noDowntime from '../img/no-downtime.png'
import WebDevelopment from '../img/web-development.png'
import coinBurn from '../img/coin-burn.png'
import './landingpage.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Feature = () => {
  return (
    <div className="bc---feature" id="why">
        <Container>
            <Grid
                container
                className="py-md-5"
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    className="pt-5"
                >
                 <h3 className="bc---section_subHeading">Key Features</h3>
                 <h2 className="bc---section_heading">Highlights</h2>
                 <p>The Bananacoin Team combines a passion for industry expertise & proven record in <br className="d-none d-md-block" />finance, development, marketing.</p>
                </Grid>
                <Carousel
                    
                    xs={12}
                    className="pr-lg-4 pb-lg-5"
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    arrows={false}
                >
                    <div>
                        <FeatureCard 
                            cardimg={decentralized}
                            title="Decentralized"
                            discription="A decentralized system ensures that Bananacoin stays free of hefty fees which makes your trades all the more easier!"
                        />
                    </div>
                    <div>
                        <FeatureCard 
                        cardimg={noDowntime}
                        title="No Downtime"
                        discription="Owing to its decentralized fabric, Bananacoins are virtually free of any possible downtimes hence making sure that you stay on top of your game."
                    />
                    </div>
                    <div>
                        <FeatureCard 
                        cardimg={WebDevelopment}
                        title="Web Development Service"
                        discription="It's not just trading Bananacoins are useful for, you can use them as a great way to receive web development services. Get your website up and ready today with ease and convenience!"
                    />
                    </div>
                    <div>
                        <FeatureCard 
                        cardimg={coinBurn}
                        title="Coin Burn"
                        discription="We burn five coins a day along with a burn rate of 2% per transaction."
                    />
                    </div>
                </Carousel>
            </Grid>
        </Container>
    </div> 
  );
}

export default Feature;
