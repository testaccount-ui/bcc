import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import './styles.css'
// Random component
const Completionist = () => {
  return (
    <div className="mx-auto">
      <p className='mt-2 mb-0 mt-md-5 mx-auto pcc---timeoutclass'> 
        Listed on Uniswap..! 
      </p> 
      <br /><a href="https://t.me/bananacoinFinance" style={{textDecoration:'underline',marginTop:14,display:'block',color:'#fff'}}>Connect with us on Telegram for updates</a></div>
  );
  }
// Renderer callback with condition

const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // alert(Date.now());

    // Render a countdown
    return (
        <Grid
          container
          justify="center"
          direction="row"
          xs={12}
          spacing={3}
          className="bc---timespan mx-auto"
        >
          <Grid
            container
            justify="center"
            direction="row"
            xs={3}
            className="mx-auto mx-3 bc---timespan"
          >
            <div className="pcc---countdown_div">
              <h1>
                {days}
                <br />
                <span>Days</span>
              </h1>
            </div>
          </Grid>
          <Grid
            container
            justify="center"
            direction="row"
            xs={3}
            className="mx-auto mx-3 bc---timespan"
          >
            <div className="pcc---countdown_div">
              <h1>
                {hours}
                <br />
                <span>Hours</span>
              </h1>
            </div>
          </Grid>
          <Grid
            container
            justify="center"
            direction="row"
            xs={3}
            className="mx-auto mx-3 bc---timespan"
          >
            <div className="pcc---countdown_div">
              <h1>
                {minutes}
                <br />
                <span>Minutes</span>
              </h1>
            </div>
          </Grid>
          <Grid
            container
            justify="center"
            direction="row"
            xs={3}
            className="mx-auto mx-3 bc---timespan"
          >
            <div className="pcc---countdown_div">
              <h1>
                {seconds}
                <br />
                <span>Seconds</span>
              </h1>
            </div>
          </Grid>
        </Grid>
    );
  }
};

const App = () => {
  // return <Countdown date={Date.now() + 11} renderer={renderer} />
  return <Countdown date='2020-11-21T21:00:03+0000' renderer={renderer} />
};

export default App;
