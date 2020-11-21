import react from 'react';
import Header from '../Components/HeaderMenu'
import Footer from '../Components/Footer/Footer'
import FAQ from './FAQ'
function index() {
  return (
    <div className="App">
      <Header />
      <FAQ />
      <Footer />
    </div>
  );
}

export default index;
