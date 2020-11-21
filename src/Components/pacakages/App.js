import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import './styles.css'
// Random component
const Completionist = () => {
  return (
    <div>
      <p className='mt-5 pcc---timeoutclass'> 
        PussyCatCore has been BURNED!!. 
      </p> 
      <br /><a href="https://www.dextools.io/app/uniswap/pair-explorer/0x8e7a50a2cf68f866514ff33011c7933aba9e47e9" style={{textDecoration:'underline',marginTop:14,display:'block'}}>Click here to visit</a></div>
  );
  }
// Renderer callback with condition

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // alert(Date.now());

    // Render a countdown
    return (
      <Container>
        <Grid
          container
          justify="center"
          direction="row"
          xs={11}
          sm={11}
          md={8}
          lg={6}
          xl={6}
          spacing={3}
          className="mx-auto my-5 pcc---timespan"
        >
          <Grid
            container
            justify="center"
            direction="row"
            xs={4}
            className="mx-auto mt-5 pcc---timespan"
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
            xs={4}
            className="mx-auto mt-5 pcc---timespan"
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
            xs={4}
            className="mx-auto mt-5 pcc---timespan"
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
      </Container>
    );
  }
};

const App = () => {
  // return <Countdown date={Date.now() + 11} renderer={renderer} />
  return <Countdown date='2020-11-01T20:02:03' renderer={renderer} />
};

export default App;
