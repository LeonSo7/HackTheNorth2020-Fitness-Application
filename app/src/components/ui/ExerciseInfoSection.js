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

let pushupData = [
];

class ExerciseInfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      pu: this.props.pu,
      squat: this.props.squat,
      su: this.props.su,
      plank: this.props.plank,
      data: pushupData
    };
  }

  componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/http://35.229.83.24:5000/scores?exercise=pushup").then(res => {
      if (res.status === 200) {
        let count = 1
        this.setState({
          data: res.data.scores
            .map(item => {
              const newItem = {
                "score": item[2],
                "date": count
              };
              pushupData.push(newItem)
              count = count + 1
            }),
        });
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
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Push Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                          <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                        </>
                      )
                        :
                        (this.state.squats) ? (
                          <>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Squats</div></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                            <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                          </>
                        )
                          :
                          (this.state.su) ? (
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Sit Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                            </>
                          )
                            :
                            <>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="currentPageButton">Planks</div></Col>
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

                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Push Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                              <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>

                            </>
                          )
                            :
                            (this.state.squats) ? (
                              <>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Squats</div></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                                <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                              </>
                            )
                              :
                              (this.state.su) ? (
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="currentPageButton">Sit Ups</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="topButtons">Planks</div></Col>
                                </>
                              )
                                :
                                <>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Push Ups</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Squats</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%' }}> <div className="topButtons">Sit Ups</div></Col>
                                  <Col style={{ paddingRight: 0, paddingLeft: '1%', paddingRight: '1%' }}> <div className="currentPageButton">Planks</div></Col>
                                </>
                        }

                      </>
                    </Row>
                    {console.log(pushupData)}
                    <LineChart
                      width={500}
                      height={500}
                      data={pushupData}
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
