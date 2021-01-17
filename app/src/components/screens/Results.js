import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/Results.css";
import { Link } from "react-router-dom";

const Result = (props) => {
    return (
        <div className="flex-container">
            <div className="container">
                <div className="text-container">
                    <h1>Your Score: ###</h1>
                    <p>
                        Good Improvement!
                    </p>
                </div>
                <div className="button-redirect">
                    <Link to="/home" style={{color: 'black', textDecoration: 'none'}}>Return to Exercises</Link>
                </div>
            </div>
        </div>
    );
}

export default Result;