// import logo from './logo.svg';
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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
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
