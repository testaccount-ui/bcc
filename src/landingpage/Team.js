import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureCard from '../Components/Featurescards/index'
import placeholder from '../img/placeholder.png'
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
import TeamCard from '../Components/TeamCard/TeamCard'
import './landingpage.css'


const Team = () => {
  return (
    <div className="bc---feature" id="team">
        <Container>
            <Grid
                container
                className="py-md-5"
            >
                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="flex-start"
                    xs={12}
                    className="pt-5"
                >
                 <h3 className="bc---section_subHeading">Meet the team</h3>
                 <h2 className="bc---section_heading">Executive team</h2>
                 <p>The Bananacoin Team combines a passion for industry expertise & proven record in<br className="d-none d-md-block" /> finance, development, marketing & licensing.</p>
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
                    image={ahmed}
                    name="Ahmed Khan Niazi"
                    designation="CEO & Lead Blockchain"
                    discription="Helping serve the community"
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/ahmed-hassan-khan-niazi-284105152/"
                    twitter="https://twitter.com/AhmedNi06855478"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={junaid}
                    name="Junaid Khalid"
                    designation="CTO & Senior Developer"
                    discription="Small acts, multiplied by hundreds of people, can transform the world"
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
                    discription="If you want the rainbow,you gotta put up with the rain."
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/tehseen-raja-47a795106/"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                
                
                <TeamCard 
                    image={hamza}
                    name="Hamza Qamar"
                    designation="Full Stack Developer"
                    discription="Meaningful silence is better than meaningless words"
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/hamza-qamar-527aba1b2/"
                    twitter="https://twitter.com/Hamza30421155"
                    github="@"
                    google="@"
                    github1="@"
                />

                <TeamCard 
                    image={fazain}
                    name="Faizan Azhar"
                    designation="Technical lead"
                    discription="In the end, we regret only the chances we didn't take"
                    facebook="https://twitter.com/mfazhar1"
                    linkedin="https://www.linkedin.com/in/faizan-azhar-96960a1b3/"
                    twitter="https://twitter.com/mfazhar1"
                    github1="@"
                    github="@"
                    google="@"
                />
                <TeamCard 
                    image={abdulla}
                    name="Abdullah"
                    designation="Marketing Manager"
                    discription="Every exit is an entry somewhere else"
                    facebook="@"
                    linkedin="https://www.linkedin.com/in/abdullah-mudassir-7321a6147/"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={ibrar}
                    name="Syed Abrar"
                    designation="UI/UX Designer"
                    discription="Pain is temporary, quitting lasts forever"
                    facebook="@"
                    linkedin="https://www.linkedin.com/mwlite/in/abrar-syed-5a003a155"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={SharonGold}
                    name="Sharon Gold"
                    designation="Ambassador"
                    discription="Only in the darkness can you see the stars"
                    facebook="@"
                    linkedin="@"
                    twitter="https://twitter.com/Sharongold885"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={HereisgHassan}
                    name="Hereisg Hassan"
                    designation="Ambassador"
                    discription="Those who are happiest are those who do the most for others"
                    facebook="@"
                    linkedin="@"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={albin}
                    name="Albin Samuel"
                    designation="Blockchain App Developer"
                    discription="Success is not final; failure is not fatal. It is the courage to continue that counts  "
                    facebook="@"
                    linkedin="@"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                <TeamCard 
                    image={isaac}
                    name="Isaac Friedman"
                    designation="Community Management"
                    discription="From the errors of others, a wise man corrects his own"
                    facebook="@"
                    linkedin="@"
                    twitter="@"
                    github="@"
                    google="@"
                    github1="@"
                />
                </Grid>
            </Grid>
        </Container>
    </div> 
  );
}

export default Team;
