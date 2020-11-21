import react from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';

import './pricingCard.css'
import { getThemeProp } from '@material-ui/styles';
import Checkboxes from '../checkbox/Checkboxes';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import SliderPage from '../slider/SliderPage';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


function PriceCard(Prop) {
  return (
  <Grid 
          container 
          direction="column"
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={4}
          className="px-3"
          
      >
      <div className="bc---pricingCard mt-4" style={{width:"100%",float:"left"}}>

        <ul className="px-0 my-0">
          {/* <li style={{height:"90px"}}>
            <h3 className="">{Prop.pname}<a href='https://bananacoin.finance/#contact' target="_blank" className="pcc---footer-menu-icons mr-3" style={{padding:"0px",float:"right"}}><EmailIcon /></a><a href='https://t.me/itsupportbc' target="_blank" className="pcc---footer-menu-icons mr-3" style={{padding:"0px",float:"right"}}><TelegramIcon /></a></h3>
            <div style={{width:"200px",float:"right",marginRight:"6px" }}><span className="ml-3">Bananacoins to spend </span><SliderPage min={0} max={100} value={50} /></div>
            <p className="my-0 ">{Prop.category}</p>
           
            
                
           
          </li>
          <li>
           <span style={{float:"left" ,paddingLeft:"250px"}}><Checkboxes/></span> <span className="" style={{float:"left",paddingLeft:"10px",paddingTop:"10px",width: "150px"}}>{Prop.service1}</span><span style={{}}>{Prop.service2}</span></li>
         
          <li>
          <span style={{float:"left" ,paddingLeft:"250px"}}><Checkboxes/></span> <span className="" style={{float:"left",paddingLeft:"10px",paddingTop:"10px",width: "150px"}}>{Prop.service3}</span><span>{Prop.service4}</span></li>
          
          <li>
          <span style={{float:"left" ,paddingLeft:"250px"}}><Checkboxes/></span><span className="" style={{float:"left",width: "150px"}}>{Prop.service5}</span><br></br><span style={{float: "left",width: "150px"}}>{Prop.service6}</span><span >{Prop.service7}</span></li> */}
          <li className="py-auto" style={{minHeight:"70px"}}><strong>{Prop.service1}</strong></li>
          <li>{Prop.service2}</li>
          <li>{Prop.service3}</li>
          <li>{Prop.service4}</li>
          <li>{Prop.service5}</li>
          <li>{Prop.service6}</li>
          <li>{Prop.service7}</li>
          <li>{Prop.service8}</li>
          <li>
            <a href ={Prop.buy} style={{color:"black",backgroundColor:"#ffcc0f",width:100}} className="d-block mx-auto" >Buy</a><br />
            <a href={Prop.talk} className="d-flex mx-auto" style={{color:"black",backgroundColor:"#ffcc0f" ,width:100}}>Talk to us <ArrowRightAltIcon /></a>
          </li>
         
          
        </ul>
      
      </div>
      
    
    
     </Grid>
  );
}

export default PriceCard;
