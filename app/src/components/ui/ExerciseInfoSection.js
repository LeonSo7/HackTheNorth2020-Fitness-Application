import "../../styles/ExerciseInfoSection.css";
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer
} from "recharts";

class ExerciseInfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      pu: this.props.pu,
      squat: this.props.squat,
      su: this.props.su,
      plank: this.props.plank,
      data: [],
      leaderboard: {
        "alex": 99,
        "joy": 45,
        "sharon": 10,
        "leon": 1,
      },
    };
  }

  fetchData = (exercise) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://35.229.83.24:5000/scores?exercise=${exercise}`).then(res => {
      if (res.status === 200) {
        const scores = res.data.scores.map((ele, i) => ([ele[2], i+1]));
        this.setState({data: scores});
      }
    });
  }

  componentDidMount() {
    this.fetchData('pushup')
  }

  activeTab = (tabName) => {
    this.setState({
      pu: tabName === 'pu',
      squat: tabName === 'squat',
      su: tabName === 'su',
      plank: tabName === 'plank'
    });

    let exercise;
    switch (tabName) {
      case 'pu':
        exercise = 'pushup';
        break;
      case 'su':
        exercise = 'situp';
        break;
      default:
        exercise = tabName;
        break;
    }

    this.fetchData(exercise);
  }

  activeLeaderBoard = (tabName) => {
    
    let hardcode = {
      "pu": {
        "alex": 99,
        "joy": 45,
        "sharon": 10,
        "leon": 1,
      },
      "su": {
        "alex": 45,
        "joy": 5,
        "sharon": 0,
        "leon": 0,
      },
      "squat": {
        "alex": 0,
        "joy": 0,
        "sharon": 0,
        "leon": 0,
      },
      "plank": {
        "alex": 36,
        "joy": 20,
        "sharon": 17,
        "leon": 5,
      },
    }
    
    this.setState({
      pu: tabName === 'pu',
      squat: tabName === 'squat',
      su: tabName === 'su',
      plank: tabName === 'plank'
    });

    let exercise;
    switch (tabName) {
      case 'pu':
        exercise = 'pushup';
        break;
      case 'su':
        exercise = 'situp';
        break;
      default:
        exercise = tabName;
        break;
    }
    
    this.setState({leaderboard: hardcode[tabName]});
  }
  

  render() {
    return (
      <div>
        <div className="titleText" style={{ marginBottom: '0.5%' }}>{this.state.title}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container className="whiteBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            {
              (this.state.title === "Leaderboard") ? (
                <>
                  <Row>
                    {
                      (this.state.pu) ? (
                        <>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Push Ups</h1></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('squat')}> <h1 className="topButtons">Squats</h1></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                          <Col style={{ paddingRight: '1%', paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('plank')}> <h1 className="topButtons">Planks</h1></Col>
                        </>
                      )
                        :
                        (this.state.squat) ? (
                          <>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Squats</h1></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                            <Col style={{ paddingRight: '1%', paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('plank')}> <h1 className="topButtons">Planks</h1></Col>
                          </>
                        )
                          :
                          (this.state.su) ? (
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('squat')}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: '1%', paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('plank')}> <h1 className="topButtons">Planks</h1></Col>
                            </>
                          )
                            :
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('squat')}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeLeaderBoard('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: '1%', paddingLeft: '1%' }}> <h1 className="currentPageButton">Planks</h1></Col>
                            </>
                    }
                  </Row>
                  <Container className="greyBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '50vh' }} >
                    <Row style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', textDecoration: 'underline', marginTop: '2%' }}>
                      <Col>Name</Col>
                      <Col>Scores</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '22px', marginTop: '3%' }}>
                      <Col>Alexandr</Col>
                      <Col>{this.state.leaderboard["alex"]}</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '22px', marginTop: '3%' }}>
                      <Col>Joyex Xiaog</Col>
                      <Col>{this.state.leaderboard["joy"]}</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '22px', marginTop: '3%' }}>
                      <Col>Sharon</Col>
                      <Col>{this.state.leaderboard["sharon"]}</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '22px', marginTop: '3%' }}>
                      <Col>Leon Sob</Col>
                      <Col>{this.state.leaderboard["leon"]}</Col>
                    </Row>
                  </Container>
                </>
              ) : (
                  <>
                    {/*Generate graphs for history*/}
                    <Row>
                      <>
                        {
                          (this.state.pu) ? (
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <h1 className="currentPageButton">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('squat')}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }} onClick={() => this.activeTab('plank')}> <h1 className="topButtons">Planks</h1></Col>
                            </>
                          )
                            :
                            (this.state.squat) ? (
                              <>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <h1 className="currentPageButton">Squats</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }} onClick={() => this.activeTab('plank')}> <h1 className="topButtons">Planks</h1></Col>
                              </>
                            )
                              :
                              (this.state.su) ? (
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('squat')}> <h1 className="topButtons">Squats</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} > <h1 className="currentPageButton">Sit Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }} onClick={() => this.activeTab('plank')}> <h1 className="topButtons">Planks</h1></Col>
                                </>
                              )
                                :
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('pu')}> <h1 className="topButtons">Push Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('squat')}> <h1 className="topButtons">Squats</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }} onClick={() => this.activeTab('su')}> <h1 className="topButtons">Sit Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="currentPageButton">Planks</h1></Col>
                                </>
                        }

                      </>
                    </Row>
                    {console.log(this.state.data)}
                    <ResponsiveContainer height='90%' width='95%'>
                      <LineChart
                        width={500}
                        height={300}
                        maxHeight={50}
                        data={this.state.data.map((ele) => ({score: ele[0], date: ele[1]}))}
                        margin={{
                          top: 20, right: 20, bottom: 20, left: 30,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" interval={0} angle={30} dx={20} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </>
                )
            }
          </Container>
        </div>
      </div >
    );
  }
}

export default ExerciseInfoSection;
