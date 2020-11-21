import react from 'react';
import Header from '../Components/HeaderMenu'
import Footer from '../Components/Footer/Footer'
import Slider from './slider'
import Bananacoin from './BananaCoin'
import Feature from './Features'
import RoadMap from './RoadMap'
import Team from './Team'
import Contact from './Contact'

function index() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Bananacoin />
      <Feature />
      <RoadMap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
