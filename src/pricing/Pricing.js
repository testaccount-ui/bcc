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
import PriceCard from '../Components/PriceCard'
import junaid from '../img/junaid.jpg'
import hamza from '../img/hamza (1).jpg'
import abdulla from '../img/abdullha.jpg'
import albin from '../img/albin.jpg'
import ahmed from '../img/ahmed.jpg'
import isaac from '../img/issac1.jpg'
import fazain from '../img/fazain.jpg'
import ibrar from '../img/ibrar.jpg'
import SharonGold from '../img/SharonGold.jpg'
import HereisgHassan from '../img/HereisgHassan.jpg'
import tahseen from '../img/tahseen.jpeg'
import google from '../img/google.png'
import TeamCard from '../Components/TeamCard1/TeamCard'
import '../landingpage//landingpage.css'

import '../whitepaper//whitepaper.css'

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
        <PageTitle pagetitle="PACKAGES" />
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Blockchain Development" {...a11yProps(0)} />
                <Tab label="Web Development" {...a11yProps(1)} />
                <Tab label="Mobile Development" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
        </div>
        <Container>
            <Grid
                container
                className="bc---height py-md-5 pl-lg-4 "
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                >
                    <TabPanel value={value} index={0} className="pr-5 w-100">
                        <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                        md={8}
                        className="mx-auto"
                        >
                            <h3 class="mr-auto">Blockchain Development</h3>
                            <p>Our devs like to take a no nonsense approach when meeting your blockchain needs. We aim to keep our work impeccable. Here are the standard issue items/features that you can expect to receive when doing business with us:
                            <ul>
                               <li>An ERC20/ERC223/ERC1155/ERC721 token ecosystem</li>
                               <li>Smart contract fixing</li>
                               <li>Complete source code</li>
                               <li>Testing on Truffle, Test PC and Testnet deployment</li>
                               <li>Etherscan source code verification</li>
                               <li>Deployment on ETH MainNet</li>
                            </ul>

                                Your tokens can be used to host your very own crowdsale, sell it off, trade it across exchanges or just to kickstart your <br></br>very own passion project!</p>
                        </Grid>
                        <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                    >
                        <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Bronze Package"
                        service2="7.00"
                        service3="Various ERC token ecosystems  "
                        service4="Smart contract fixing"
                        service5="Complete source code"
                        service6="Testing on Truffle, Test PC and Testnet "
                        service7="Etherscan source code verification"
                        service8="Deployment on ETH MainNet"
                        // service9="Client portfolio"
                        buy="#"
                        talk="#"
                    link="#"

                    
                        /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Silver Package"
                        service2="35.00"
                        service3="All services of Bronze Package"
                        service4="White paper"
                        service5="Medium article"
                        service6="Designs,Website and Content"
                        service7="DAap & payment gateway integration"
                        service8="Live customer chat "
                        service9="Client portfolio"
                        link="#"

                        
                    /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Gold Package"
                        service2="35.00"
                        service3="All services of Silver Package"
                        service4="White Paper"
                        service5="Medium Artical"
                        service6="Design , website & content"
                        service7="DAap & payment gateway integration "
                        service8="live customer chat"
                        service9="Client portfolio"
                        link="#"

                        
                    />  

             </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                        md={8}
                        className="mx-auto"
                        >
                            <h3 class="mr-auto">Web Development</h3>
                            <p>A good website is crucial to make your startup dreams come true in this day and age. Put your Bananacoins to good use by creating your very own stunning website from us. Afterall, Bananacoins are a good investment in more ways than one!</p>
                        </Grid>
                        <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                    >
                        <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Bronze Package"
                        service2="3.00"
                        service3="Static"
                        service4="3 pages"
                        service5="Quick loading"
                        service6="Customizable design"
                        service7="Mobile-responsive"
                        service8="1 Revision"
                    // service9="Client portfolio"
                    link="#"

                    
                        /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Silver Packae"
                        service2="21.00"
                        service3="Dynamic"
                        service4="7 pages"
                        service5="All services of Bronze Package"
                        service6="Email addresses & Webmaster tools"
                        service7="SEO optimization "
                        service8="2 Revisions"
                        service9=""
                        link="#"

                        
                    /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Gold Package"
                        service2="45.00"
                        service3="Dynamic"
                        service4="15 Pages "
                        service5="All services of Silver Package"
                        service6="Google maps integration + Customer chat"
                        service7="1 Year SSL certification + Administrator panel"
                        service8="3 Revisions"
                        service9="Client portfolio"
                        link="#"

                        
                    />  

             </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                        md={8}
                        className="mx-auto"
                        >
                            <h3 class="mr-auto">Mobile Development</h3>
                            <p>Any service these days is incomplete without a seamless app that integrates the whole user experience within itself. Using your Bananacoins now you can breathe life into a mobile app for your very own needs. Our packages provide myriad services that you can include or remove from your requirements.</p>
                        </Grid>
                        <Grid 
                        container 
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        xs={12}
                    >
                        <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Bronze Package"
                        service2="3.00"
                        service3="Tab with  functionality (upto 6 tabs)"
                        service4="Custom Designed screenshots"
                        service5="App icon"
                        service6="Secure data backup"
                        service7="Published google to Play store"
                        service8="1 Revision"
                    // service9="Client portfolio"
                    link="#"

                    
                        /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Silver Packae"
                        service2="21.00"
                        service3="Tab with  functionality (upto 12 tabs)"
                        service4="Custom Designed screenshots"
                        service5="App icon"
                        service6="Secure data backup"
                        service7="Published google to Play store/ISO"
                        service8="2 Revision"
                        service9=""
                        link="#"

                        
                    /> 
                    <PriceCard
                        pname="Custom"
                        category="Best Value"
                        service1="Gold Package"
                        service2="45.00"
                        service3="Tab with  functionality (upto 15 tabs)"
                        service4="Custom Designed screenshots"
                        service5="App icon"
                        service6="Secure data backup"
                        service7="Published google to Play store/ISO"
                        service8="3 Revision"
                        service9=""
                        link="#"

                        
                    />  
             </Grid>
                    </TabPanel>
                </Grid>

                <Grid>
               
            <Grid
                container
                className="py-md-5"
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems=""
                    xs={12}
                    md={10}
                    className="pt-5 mx-auto text-center"
                >
                 <h2 className="bc---section_subHeading">TESTIMONIALS FROM  INVESTORS OF OUR  LAST CONTRAST</h2>
                 {/* <h2 className="bc---section_heading">Executive team</h2> */}
                 {/* <p>The Bananacoin Team combines a passion for industry expertise & proven record in<br className="d-none d-md-block" /> finance, development, marketing & licensing.</p> */}
                </Grid>
                <Grid 
                    container 
                    direction="rows"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    className="pt-5"
                >
                <TeamCard 
                    image={SharonGold}
                    name="SharonGol"
                    designation="Ambassador"
                    discription="Pcat is the latest Defi project where I made a significant profit. A very transparent and legit management and supportive team. Successful marketing ideas, there was almost no unhappy single investor."
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/ahmed-hassan-khan-niazi-284105152/"
                    twitter="https://twitter.com/AhmedNi06855478"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={HereisgHassan}
                    name="Hereisg Hassan"
                    designation="Ambassador"
                    discription="I was an early investor on PuccyCatCore. I am very glad I did invest into pCAT, made me some good gains. Token was launched at $1.3 and went as high as $26.. That's a wooping x25. Damn,
                    what a ride!"
                    facebook="@"
                    linkedin="https://linkedin.com/in/junaidkhalid22"
                    twitter="https://twitter.com/junaid9800"
                    github="https://githubcampus.expert/mkhalid1/"
                    google={google}
                    github1="https://github.com/mkhalid1"
                />
                <TeamCard 
                    image={tahseen}
                    name="Raja Muhammad Tehseen"
                    designation="CEO & COM"
                    discription="Didn't meet PCAT at launch price though but from my entry point I made 5x and that was because I wasn't greedy. Still holding some though because I believe the team has much more in store."
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/tehseen-raja-47a795106/"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                
                
               
                </Grid>
            </Grid>
       
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default WhitePaper;



// import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid'
// import HeadingTitle from '../Components/HeadingTitle'
// import PriceCard from '../Components/PriceCard'
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

// import './price.css'

// const Pricing = () => {
//   return (

    
//     <div className="bc---roadMap">
//         <HeadingTitle pagetitle="Packages"/>
//         <Container>
//             <Grid
//                 container
//                 className="py-5"
//             >
//                 <PriceCard
//                     pname="Blockchain Development"
//                     category="Make Your Own Coin"
//                     service1="Bronze Package:"
//                     service2="(5-10  Bananas)"
//                     service3="Burnable Coin"
//                     service4="(20-30  Bananas)"
//                     service5="Custom coin + "
//                     service6="DAap Application"
//                     service7="(30-50  Bananas)"
//                     link="#"
//                 />
//                  <PriceCard
//                     pname="Web Developnment"
//                     // category="Basic"
//                     service1="Static website"
//                     service2="(1 Banana per page)"
//                     service3="Dynamic website"
//                     service4="(3 Banana per page)"
//                     service5="Data Analytics"
//                     service6="+ DAap Application"
//                     service7="(5 Banana per page)"
//                     // service8="Upto 1 contact form"
//                     // service9="On demand training session"
//                     link="#"
                   
//                 />

//                 <PriceCard
//                     pname="Mobile Developnment"
//                     // category="Basic"
//                     service1="Static   App"
//                     service2="(1 Banana per page)"
//                     service3="Dynamic   App"
//                     service4="(3 Banana per page)"
//                     service5="Data Analytics"
//                     service6="+
//                     DAap Application"
//                     service7="(5 Banana per page)"
//                     // service8="Upto 1 contact form"
//                     // service9="On demand training session"
//                     link="#"
//                 />
//                 <button className="mt-3 pt-2 pl-4 pr-4" style={{display: "block",marginLeft: "auto", marginRight: "unset",backgroundColor: "#dcb00e",color: "black",display: "flex",border: "none"}}><span>Contact Us</span><ArrowRightAltIcon/></button>
//                 {/*
//                 <PriceCard
//                     pname="Custom"
//                     category="Best Value"
//                     service1="100% dynamic website"
//                     service2="Custom niche based design"
//                     service3="Page management"
//                     service4="Creative logo design"
//                     service5="Custom designed sliders"
//                     service6="SEO friendly website"
//                     service7="Fully mobile responsive"
//                     service8="Custom cms with admin panel"
//                     service9="Client portfolio"
//                     link="#"
//                 /> */}
//             </Grid>
//         </Container>
//     </div> 
//   );
// }

// export default Pricing;
