import react from 'react';
import Header from '../Components/HeaderMenu'
import Footer from '../Components/Footer/Footer'
import Pricing from './Pricing'
function index() {
  return (
    <div className="App">
      
      <Header />
      <Pricing />
      <Footer />
    </div>
  );
}

export default index;
