import React from "react";
import { Col, Row } from "reactstrap";
import "./module.css";

function ThirdHome() {
  return (
    <>
      <Row>
        <Col md="12" className="thirdHome mt-5">
          <h6 style={{ color: "blue" }} className="mt-3">
            {" "}
            Our pricing
          </h6>
          <h2>
            <b>
              {" "}
              Absolute
              <span class="gradient-text-secondHome">
                transparency in our pricing;
              </span>{" "}
              <br /> we stick our world
            </b>
          </h2>
          <p className="mt-3">
            Our default plan covers all your business needs for starting off and
            Start and Grow <br /> covers all the services needed for growth
          </p>
        </Col>
        <Col md="12" className="d-flex">
        <Col md={{ span: 3, offset: 3 }} className="me-3">

            <div
              className="card firstCard"
              style={{
                width: "20rem",
                textAlign: "center",
              }}
            >
              <div className="card-body mt-3">
                <h6 className="card-title-default">Default plan</h6>
                <h3 className="gradient-text-secondHome">Free</h3>
                <h6 className="card-text">Business start</h6>
                <p>
                  This plan gives new businesses all <b /> the features required
                  to start
                </p>
                <ul className="" style={{ textAlign: "left" }}>
                  <li className="listItem">
                    In corporate your company seamlessly
                  </li>
                  <li className="listItem">pay only government fees</li>
                  <li className="listItem">Acces basic One View features </li>
                  <li className="listItem">
                    {" "}
                    ideal for startups and small business
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md="6" className="mb-4">
            <div
              className="card secondCard"
              style={{
                width: "20rem",
                textAlign: "center",
              }}
            >
              <div className="card-body  mt-3">
                <h6 className="card-title-master">Managed plan</h6>
                <h3 className="gradient-text-secondHome">
                  AED 5000/<sub className="gradient-text-secondHome">year</sub>
                </h3>
                <h6 className="card-text">Managed plan</h6>
                <p>
                  This plan gives new businesses grow with <b />
                  all the right amenities{" "}
                </p>
                <ul className="" style={{ textAlign: "left" }}>
                  <li className="listItem">
                    In corporate your company seamlessly
                  </li>
                  <li className="listItem">pay only government fees</li>
                  <li className="listItem">Acces basic One View features </li>
                  <li className="listItem">
                    {" "}
                    ideal for startups and small business
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default ThirdHome;
