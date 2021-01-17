import './styles/App.css';
import React, { Component } from 'react';
import Login from './components/screens/Login';
import Home from './components/screens/Home';
import Workout from './components/screens/Workout';
import History from './components/screens/History';
import LeaderBoard from './components/screens/LeaderBoard';
import Confirmation from './components/screens/Confirmation';
import { Route, Switch } from 'react-router-dom';
import Result from './components/screens/Results';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <main className="App" >
        <Switch>
          {/* Routes */}
          <Route path='/' component={Login} exact />
          <Route path='/home' component={Home} />
          <Route path="/workout" component={Workout} />
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/history" component={History} />
          <Route path="/home" component={Home} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/results" component={Result} />
        </Switch>
      </main>
    );
  }
}

export default App;
