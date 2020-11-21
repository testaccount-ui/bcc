import './App.css';
import {Route,Switch} from 'react-router-dom'
import Landing from './landingpage'
import Pricing from './pricing'
import WhitePaper from './whitepaper'
import FAQ from './FAQ'
import Portfolio from './Portfolio'

function App() {
  return (
      <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/packages" component={Pricing} />
        <Route path="/white-paper" component={WhitePaper} />
        <Route path="/faq" component={FAQ} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      </div>
  );
}

export default App;
