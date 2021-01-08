import './App.css';

import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import{Product,} from './components/product';
import Team from './pages/Team';
import FadeMenu from './pages/FadeMenu';
import Purchase from './pages/Purchase';
import SpeedDials from './pages/SpeedDial';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/products' exact component={Product} />
        <Route path='/product/purchase' exact component={Purchase} />
        <Route path='/product/selling' exact component={FadeMenu} />
        <Route path='/speeddial' exact component={SpeedDials} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
