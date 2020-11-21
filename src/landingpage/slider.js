import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Countnumber from '../Components/countdown/App'

import './landingpage.css'
const slider = () => {
  return (
    <div className="bc---slider">
        <Container>
            <Grid
                container
            >
                <Grid 
                    container 
                    xs={12}
                    md={6}
                    className="my-5 py-md-5 bs---slider_forMobile"
                >
                    <Grid 
                        container 
                        xs={12}
                    >
                        <h1 className="text-left">
                            Go bananas with our new <br />blockchain token!
                        </h1>
                        <p className="mt-3 text-left">
                        Bananacoin is geared to make your investment dreams come true. With a coin cap of just 500 tokens, you can lay back and watch your Bananacoins ripen with value. We burn five coins a day along with a burn rate of 2% per transaction. What's more, you can use Bananacoin in exchange for development services. This is one opportunity you sure don't want to miss out on.
                        <div className="Footer---form mt-3" style={{borderRadius: "5px",height:"0px"}}>
                            <a href="https://etherscan.io/token/0x21f54372c07b930b79c5c2d9bb0eaaca86c3b298#balances" className="submit">Etherscan Contract</a>
                        </div>
                        </p>
                    </Grid>
                    <Grid 
                        container 
                        xs={12}
                    >
                        {/* <Button 
                            href="#" 
                            variant="contained" 
                            className="mt-3 bc---button text-capitalize pl-5 pr-5"
                        >
                            Unlock Wallet
                        </Button> */}
                    </Grid>
                    <Grid 
                        container 
                        xs={12}
                        md={8}
                        className="bc---counter p-4 mt-4 text-center"
                    >
                        <h3 className="mx-auto mt-0">UNISWAP listing goes live in</h3>
                        <Countnumber />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default slider;
