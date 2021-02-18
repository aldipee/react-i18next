import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/HomeWithHoc';
import Users from './pages/Users';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
