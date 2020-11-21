import react from 'react';
import Header from '../Components/HeaderMenu'
import Footer from '../Components/Footer/Footer'
import Portfolio from './Portfolio'
function index() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default index;
