import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageTitle from '../Components/HeadingTitle'
import PieChart from '../Components/Chart/PieChart'
import picture from '../img/123456789.png'

import './whitepaper.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const WhitePaper = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bc---roadMap bc---whitePaper">
        <PageTitle pagetitle="White Paper" />
        {/* <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="TOKENOMICS" {...a11yProps(0)} />
                <Tab label="DISTRIBUTION" {...a11yProps(1)} />
                <Tab label="OUR VISION" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
        </div> */}
        <Container>
            <Grid
                container
                className="bc---height py-md-5 pl-lg-4 "
            >
                <Grid 
                    container 
                    direction="column"
                    justify="start"
                    alignItems="flex-start"
                    xs={12}
                >
                    <TabPanel value={value} index={0} className="pr-5">
                        <h3>TOKENOMICS</h3>
                        <p>With a total of 500 tokens in circulation, Bananacoin ensures that holders can expect a good return on their investment. Everyday 5 tokens gets burnt alongside a 2% burn rate for every transaction. The ever growing market for web development further bolsters its demand. Every Friday, we mint back to 500 tokens.</p>
                        <h3 className="pt-5">DISTRIBUTION</h3>
                        <p>With 500 tokens in total, Bananacoin ensures that your tokens will only decrease from there. 250 tokens are available on presale for which people will be whitelisted, whereas 30 other tokens will be siphoned for dextools sponsorship. An additional 30 are assigned for the development team, while 150 tokens are reserved for liquidity. The remaining 20 will be reserved for daily burning (in total).</p>
                        <Grid
                            xs={12}
                            md={12}
                            className="bc---chart_height mx-auto px-0 px-lg-3 mb-4 pt-5"
                        >
                          <PieChart 
                            name1="Liquidity"
                            percent1="30"
                            name2="Dev team"
                            percent2="6"
                            name3="Dextools Sponsership"
                            percent3="6"
                            name4="Presale"
                            percent4="50"
                            name5="Contributors"
                            percent5="4"
                            name6="Daily burning"
                            percent6="4"  
                          />
                        </Grid>
                        <h3>Our VISION</h3>
                        <p>We aspire to be the go to option for people looking for web development services. Good investments and great websites are hard to come by, but Bananacoin can do both!</p>
                        
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        <h3>Breaking It Down</h3>
                        <Grid
                            xs={12}
                            md={6}
                            className="bc---chart_height mx-auto px-0 px-lg-3 mb-4"
                        >
                          <PieChart 
                            name1="Liquidity"
                            percent1="32"
                            name2="Dev team"
                            percent2="8"
                            name3="Dextools Sponsership"
                            percent3="10"
                            name4="Persale"
                            percent4="50"  
                          />
                        </Grid>
                        <p>With 500 tokens in total, Bananacoin ensures that your tokens will only decrease from there. 250 tokens are available on presale for which 50 people will be whitelisted, whereas 50 will be siphoned for dextools sponsorship. An additional 20 are assigned for the development team, while the rest are reserved for liquidity. Lastly, 70 will be reserved for daily burning (in total).</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <h3>Our Future Planning</h3>
                        <p>We aspire to be the go to option for people looking for web development services. Good investments and great websites are hard to come by, but Bananacoin can do both!</p>
                    </TabPanel> */}
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default WhitePaper;