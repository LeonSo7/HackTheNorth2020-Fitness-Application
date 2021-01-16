import "../../styles/Home.css";
import React, { Component } from 'react';
import Header from "../ui/Header";
import ExerciseInfoSection from "../ui/ExerciseInfoSection";

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: true,
      exercise: false,
      leaderBoard: false,
      title: "History"
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

export default History;
