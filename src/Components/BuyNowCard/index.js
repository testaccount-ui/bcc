import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import './buyCard.css'
// images
import logoimg from '../../img/logo.png'

const BuyCard = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      xs={12}
      sm={4}
      className="pcc---buyCard text-center px-2 my-3 my-md-0"
    >
        <a href={props.link}
          className="pcc---buyCardBox py-5 mt-lg-4">
            <h3 className="mb-3">{props.title}</h3>
            <p className="mb-1">{props.amounttitle}</p>
            <p className="mb-2">{props.amount}</p>
            <p className="mb-1">{props.rewadstitle}</p>
            <p className="mb-2">{props.rewards}</p>
            <Button href={props.link} variant="contained" color="primary">
              Buy Now
            </Button>
          </a>
    </Grid>
  );
}

export default BuyCard;
