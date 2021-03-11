import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/playerInfo/:idTeam">
              <TeamDetails></TeamDetails>
            </Route>
            <Route path="/team">
              <Team />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
