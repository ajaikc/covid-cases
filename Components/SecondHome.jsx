import Image from "next/image";
import React from "react";
import { Col, Row } from "reactstrap";
import secondImage from "../asset/home-2.png";
import "./module.css";

function SecondHome() {
  return (
    <>
      <Row>
        <Col md="12" className="secondHomeImage">
          <Image
            src={secondImage}
            className="img-fluid"
            style={{ marginTop: "-50px" }}
          />
        </Col>
        <Col md="12" className="secondHomeLabel">
          <h6 style={{ color: "blue" }}>start and grow</h6>
          <h2>
            <b>
              Start your <span class="gradient-text-secondHome">business</span>{" "}
              from scratch
            </b>
          </h2>
          <p className="mt-1">
            we start your business and take care of all the documnts and
            regulatory procedures in order to make <br /> your business fully
            functional in the UAE in only 2-3 weeks
          </p>
          <button className="btn btn-secondary startButton mt-3 mb-4" style={{backgroundColor:"#0a1848"}}> Start your business</button>
        </Col>
      </Row>
    </>
  );
}

export default SecondHome;
