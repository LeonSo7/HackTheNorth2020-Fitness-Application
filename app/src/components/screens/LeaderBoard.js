import "../../styles/Home.css";
import React, { Component } from 'react';
import Header from "../ui/Header";
import ExerciseInfoSection from "../ui/ExerciseInfoSection";

class LeaderBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leaderBoard: true,
      exercise: false,
      history: false,
      title: "Leaderboard"
    }
  }

  render() {
    return (
      <div className="mainContainer" >
        <Header leaderBoard={this.state.leaderBoard} exercise={this.state.exercise} history={this.state.history} />
        {/* Exercise Cards */}
        <ExerciseInfoSection title={this.state.title} pu={true} />
      </div >
    );
  }
}

export default LeaderBoard;
