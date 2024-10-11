import React from "react";
import { Col, Row } from "reactstrap";
import "./module.css";
import fifthImage from "../asset/visa centre.png";
import Image from "next/image";

function FifthBlock() {
  return (
    <>
      <Row className="fifthBlock">
        <Col md="12" className=" mt-5">
          <h6 style={{ color: "blue" }} className="mt-3">
            {" "}
            VISAS
          </h6>
          <h2>
            <b>
              <span class="gradient-text-secondHome">Manage your visas</span> on
              our platform:
              <br /> swift and easy
            </b>
          </h2>
          <p className="mt-3">
            Our default plan covers all your business needs for starting off and
            Start and Grow <br /> covers all the services needed for growth
          </p>
          <button
            className="btn btn-secondary startButton mt-3 mb-4"
            style={{ backgroundColor: "#0a1848" }}
          >
            {" "}
            Start your business
          </button>
        </Col>
        <Col md="12" className="mb-6">
          <Image
            alt=""
            src={fifthImage}
            className="img-fluid mt-1"
            style={{ width:"80%"}}
          />
        </Col>
      </Row>
    </>
  );
}

export default FifthBlock;
