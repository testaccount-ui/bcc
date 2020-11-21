import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'

import './blogscards.css'
// images
import logoimg from '../../img/logo.png'

const Featurescards = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      xs={12}
      className="pcc---blogsCard px-3 my-3"
    >
        <a href={props.blogurl}
          className="py-3 px-4 px-md-3 px-xl-4">
            <div className="pcc---cardhover">
              <div></div>
              <img src={props.imageUrl} className="img-fluid" />
            </div>
            <h4 className="my-3 text-left">{props.title}</h4>
            <p className="mt-4 text-left mb-1">{props.blogdate}</p>
          </a>
    </Grid>
  );
}

export default Featurescards;
