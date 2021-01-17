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
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/http://35.229.83.24:5000/scores?exercise=pushup").then(res => {
      if (res.status === 200) {
        const scores = res.data.scores.map((ele, i) => ([ele[2], i+1]));
        console.log(scores)
        this.setState({data: scores});
      }
    });
  }

  render() {
    return (
      <div>
        <div className="titleText" style={{ marginBottom: '0.5%' }}>{this.state.title}</div>
        <div>{this.state.data}</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Container className="whiteBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            {
              (this.state.title == "Leaderboard") ? (
                <>
                  <Row>
                    {
                      (this.state.pu) ? (
                        <>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Push Ups</h1></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                        </>
                      )
                        :
                        (this.state.squats) ? (
                          <>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Squats</h1></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                          </>
                        )
                          :
                          (this.state.su) ? (
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                            </>
                          )
                            :
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="currentPageButton">Planks</h1></Col>
                            </>
                    }
                  </Row>
                  <Container className="greyBackground" style={{ padding: '2%', justifyContent: 'center', alignItems: 'center', height: '50vh' }} >
                    <Row style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', textDecoration: 'underline', marginTop: '2%' }}>
                      <Col>Name</Col>
                      <Col>Score</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Alexandr</Col>
                      <Col>9999</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Joyex Xiaog</Col>
                      <Col>450</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Sharon</Col>
                      <Col>100</Col>
                    </Row>
                    <Row style={{ textAlign: 'center', fontSize: '30px', marginTop: '3%' }}>
                      <Col>Leon Sob</Col>
                      <Col>1</Col>
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
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Push Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                            </>
                          )
                            :
                            (this.state.squats) ? (
                              <>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Squats</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                              </>
                            )
                              :
                              (this.state.su) ? (
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="currentPageButton">Sit Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="topButtons">Planks</h1></Col>
                                </>
                              )
                                :
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Push Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Squats</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <h1 className="topButtons">Sit Ups</h1></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <h1 className="currentPageButton">Planks</h1></Col>
                                </>
                        }

                      </>
                    </Row>
                    {console.log(this.state.data)}
                    <LineChart
                      width={500}
                      height={500}
                      data={this.state.data.map((ele) => ({score: ele[0], date: ele[1]}))}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" interval={0} angle={30} dx={20} />
                      <YAxis />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
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
