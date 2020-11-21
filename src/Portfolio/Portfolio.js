import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import HeadingTitle from '../Components/HeadingTitle'
import PortfolioCards from '../Components/PortfolioCards'
import Homemain from '../img/Homemain.png'
import Selio from '../img/selio.png'
import Escucha from '../img/Escucha.png'
import Ancestream from '../img/Ancestream.png'
import AimaanFoods from '../img/Aimaan-Foods.png'
import modalimage from '../img/Home.png'
import modalimage1 from '../img/aimaanfoods.png'
import modalimage2 from '../img/University.png'
import modalimage3 from '../img/selio11.png'
import modalimage4 from '../img/Homepage112.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div className="bc---roadMap">
        <HeadingTitle pagetitle="Portfolio"/>
        <Container>
            <Grid
                container
                className="py-5"
            >
                <PortfolioCards
                    cardImage={Homemain}
                    cardTitle="Mimesi"
                    modalImage={modalimage}
                />
                <PortfolioCards
                    cardImage={Escucha}
                    cardTitle="Escusha"
                    modalImage={modalimage2}
                />
                <PortfolioCards
                    cardImage={Selio}
                    cardTitle="Selio"
                    modalImage={modalimage3}
                />
                <PortfolioCards
                    cardImage={Ancestream}
                    cardTitle="Ancestream"
                    modalImage={modalimage4}
                />
                <PortfolioCards
                    cardImage={AimaanFoods}
                    cardTitle="AimaanMeat"
                    modalImage={modalimage1}
                />
            </Grid>
        </Container>
    </div> 
  );
}

export default Portfolio;
