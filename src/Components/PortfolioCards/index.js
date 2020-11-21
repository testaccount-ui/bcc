import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './portfolioCard.css'
import { getThemeProp } from '@material-ui/styles';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    left: '0px',
    right: '0px',
    margin: 'auto',
    top: '5%',
    height:'95vh',
    overflow:'auto'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    padding: '10px 20px',
    backgroundColor:'#000000'
  },
}));

const PortfolioCard = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bc---faqCard mt-4">
      <Grid 
          container 
          direction="column"
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={8}
          className="px-3 mx-auto"
      >
        <a onClick={handleOpen}>
          <h3 className="mb-4">{props.cardTitle}</h3>
          <img src={props.cardImage} className="img-fluid w-100 bc---roundedimage" />
        </a>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <div className="pt-4" style={{display: 'flex',placeContent: 'space-between'}}>
              <h2 id="simple-modal-title">{props.cardTitle}</h2>
              <a href='#' className="text-light" onClick={handleClose}>X</a>
            </div>
            <img src={props.modalImage} className="img-fluid w-100 mt-5" />
          </div>
        </Modal>
      </Grid>
    </div>
  );
}

export default PortfolioCard;
