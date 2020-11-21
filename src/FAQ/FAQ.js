import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import HeadingTitle from '../Components/HeadingTitle'
import FAQCard from '../Components/FAQCards'

import './faq.css'

const FAQ = () => {
  return (
    <div className="bc---roadMap">
        <HeadingTitle pagetitle="Frequently Asked Questions"/>
        <Container>
            <Grid
                container
                className="py-5"
            >
                <FAQCard
                    question="What are Bananacoins?"
                    answer="Bananacoin is an innovative form of decentralized currency which operates without any interference from third parties. Bananacoin is great for investment purposes, and can even be used for web development services!"
                />
                <FAQCard
                    question="I am a holder, now what?"
                    answer="As a holder, it's best to hold your coins till the end of the week before the next cycle. It helps in growing your investment portfolio and serves as a good asset even when you're not seeking web development services."
                />
                <FAQCard
                    question="With the coin cap and burning events, how is this sustainable?"
                    answer="Every Friday Bananacoin turns mintable, that is to say that they revert to their original value. Take our word for it and sell yours off a day prior!"
                />
            </Grid>
        </Container>
    </div> 
  );
}

export default FAQ;
