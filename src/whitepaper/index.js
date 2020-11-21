import react from 'react';
import Header from '../Components/HeaderMenu'
import Footer from '../Components/Footer/Footer'
import WhitePaper from './Whitepaper'
function index() {
  return (
    <div className="App">
      <Header />
      <WhitePaper />
      <Footer />
    </div>
  );
}

export default index;
