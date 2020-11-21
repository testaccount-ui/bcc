import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import './teamcard.css'

const Featurescards = (props) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      xs={12}
      sm={4}
      
      className="px-3"
    >
        <div className="bc---teamCard py-4 px-3 my-3 text-center" style={{minHeight:"300px"}} > 
            <img src={props.image} className="img-fluid mx-auto" style={{width: '100px',height:'100px',borderRadius:100,objectFit: 'cover'}}/>
            <p className="mt-3 pt-1" style={{minHeight: "90px"}}>{props.discription}</p>
            <p className="mt-3 pt-1" style={{color: '#ffcc0F'}}><strong>{props.name}</strong></p>
            <p className="mt-3 pt-1" ><strong>{props.designation}</strong></p>
            
            <div>
            {/* {props.facebook != '#' &&
              <a href={props.facebook} ><ThreeDRotation /></a>
            } */}
              
              {/* <a href={props.facebook} ><ThreeDRotation /></a> */}
            {/* {props.linkedin != '@' &&
              <a href={props.linkedin} target="_blank" ><LinkedInIcon /></a>
            }
            {props.twitter != '@' &&
              <a href={props.twitter} target="_blank" ><TwitterIcon /></a>
            }

            {props.github1 != '@' &&
              <a href={props.github1} target="_blank"><GitHubIcon /></a>
            }
            
            {props.github != '@' &&
              <a href={props.github} target="_blank" ><GitHubIcon /></a>
            }
            
            
            {props.google != '@' &&
            <a href="https://gdg.community.dev/u/mznn6z/" target="_blank">
            <img src={props.google} className="img-fluid mx-auto" style={{width: "32px",
              paddingBottom: "18px",objectFit: 'cover'}}/>
              </a>
              // <a href={props.google} ><GTranslateIcon /></a>
            } */}
              
              
            </div>
            </div>
    </Grid>
  );
}

export default Featurescards;
