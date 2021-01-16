import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import History from './components/screens/History';
import Home from './components/screens/Home';
import LeaderBoard from './components/screens/LeaderBoard';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/history" component={History} />
      <Route path="/home" component={Home} />
      <Route path="/leaderboard" component={LeaderBoard} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
