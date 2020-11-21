import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Countnumber from '../Components/countdown/App'
import letterimg from '../img/mail-box.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './landingpage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TelegramIcon from '@material-ui/icons/Telegram';



const Contact = () => {
  const notify = () => toast("Your email has been sent successfully. We will get back to you within 24 hours");
  return (
    
    <div className="bc---bananacoin bc---contact" id="contact">
        <Container>
            <Grid
                container
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    sm={6}
                    className="my-5 py-md-5 pl-lg-4"
                >
                 <h3 className="bc---section_subHeading">CONTACT</h3>
                 <h2 className="bc---section_heading">Get in touch</h2>
                 <p>Got a burning question or want to discuss how you want to make your next big project a reality?, connect with us now!</p>

                  <form className="bc---contactForm" noValidate autoComplete="off">
                  <a href ="" ><span>TELEGRAM< TelegramIcon /></span></a><br></br>
                    <TextField className="mt-4"  id="filled-basic" label="Your name" variant="filled" />
                    <TextField className="mt-3"  id="filled-basic2" label="Your email" variant="filled" />
                    <TextField className="mt-3 filled-basic3"  id="filled-basic3" label="Your message" variant="filled" multiline rows={4} />
                    <div className="mt-4">
                      <Button variant="contained" href="#contained-buttons" onClick={notify}  >
                        Submit
                      </Button>
                      <ToastContainer />
                    </div>
                  </form>
                </Grid>
                <Grid 
                    container 
                    xs={12}
                    sm={6}
                    className="my-5 py-md-5 px-5"
                >
                    <img src={letterimg} className="img-fluid" />
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default Contact;
