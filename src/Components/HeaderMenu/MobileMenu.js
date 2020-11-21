import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu';

// images
import logoimg from '../../img/logo.png'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      style={{backgroundColor:'#ffcc0F'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
      <a href="/">
        <img src={logoimg} />
      </a>
    </List>
    <Divider />
      <List>
        <ListItem button component="a" href="/#about" >
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="/#why" >
          <ListItemText primary="Why" />
        </ListItem>
        <ListItem button component="a" href="/#road-map" >
          <ListItemText primary="Road Map" />
        </ListItem>
        <ListItem button component="a" href="/#team" >
          <ListItemText primary="Team" />
        </ListItem>
        {/* <ListItem button component="a" href="/packages" >
          <ListItemText primary="Packages" />
        </ListItem> */}
        <ListItem button component="a" href="/white-paper" >
          <ListItemText primary="White Paper" />
        </ListItem>
        <ListItem button component="a" href="/portfolio" >
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button component="a" href="/#contact" >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component="a" href="/faq" >
          <ListItemText primary="FAQ" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      {/* <List>
        <a href='#' className="pcc---headermenu-startbtn">Get Started</a>
      </List> */}
    </div>
  );

  return (
    <div className="pcc---headerMenu_mobile" style={{backgroundColor: '#ffcc0F'}}>
      <Container maxWidth="xl">
        <Grid
            container
            direction="row"
        >
          <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              xs="6"
          >
              <a href="#">
                <img src={logoimg} />
              </a>
          </Grid>
          <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              xs="6"
            >
              <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                  <MenuIcon />  
                </Button>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  {list('left')}
                </Drawer>
              </React.Fragment>
            </Grid>
        </Grid>
      </Container>
  </div>
  );
}
export default TemporaryDrawer;