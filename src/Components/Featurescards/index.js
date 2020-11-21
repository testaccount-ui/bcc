import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'

import './Featurescards.css'
// images
import logoimg from '../../img/logo.png'

const Featurescards = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      xs={12}
      className="pcc---buyCard px-3 my-3"
    >
        <div
          className="pcc---buyCardBox text-center py-3 px-4 px-md-3 py-xl-5 px-xl-4 mt-lg-4">
            <img src={props.cardimg} className="img-fluid" />
            <h5 className="text-center mt-3">{props.title}</h5>
            <p className="text-center pt-4 mb-1">{props.discription}</p>
        </div>
    </Grid>
  );
}

export default Featurescards;
