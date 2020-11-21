import react from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';

import './FAQCard.css'
import { getThemeProp } from '@material-ui/styles';

function FAQCard(prop) {
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
        <h3>{prop.question}</h3>
        <p>{prop.answer}</p>
      </Grid>
    </div>
  );
}

export default FAQCard;
