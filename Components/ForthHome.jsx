import React from "react";
import { Col, Row } from "reactstrap";
import "./module.css";
import firstImage from "../asset/fourth-1.png";
import secondImage from "../asset/fourth-2.png";
import thirdImage from "../asset/fourth-3.png";
import fourthImage from "../asset/fourth-4.png";
import maskOne from "../asset/mask-1.png";
import maskTwo from "../asset/mask-2.png";
import Image from "next/image";
function ForthHome() {
  return (
    <>
      <Row>
        <Col
          md="12"
          className="fourthHome mt-3
"
        >
          <h6 className="mt-3" style={{ color: "blue" }}>
            start and grow
          </h6>
          <h2>
            <b>Focus on your growth and we'll take care of rest.</b>
          </h2>
          <p className="mt-1">
            we start your business and take care of all the documnts and
            regulatory procedures in order to make <br /> your business fully
            functional in the UAE in only 2-3 weeks
          </p>
          <button
            className="btn btn-secondary startButton mt-3 mb-4"
            style={{ backgroundColor: "#0a1848" }}
          >
            {" "}
            Start your business
          </button>
        </Col>
        <Col md="12" className="d-flex fourthImageBlock">
          <Col md="3" className="fourthImages me-3">
            <Image
              src={firstImage}
              className="img-fluid img-fit fourthImageSize"
            />
          </Col>
          <Col md="3" className="fourthImages me-3">
            <Image src={secondImage} className="img-fluid img-fit" />
          </Col>
          <Col md="3" className="fourthImages me-3">
            <Image src={thirdImage} className="img-fluid" />
          </Col>
          <Col md="3" className="fourthImages">
            <Image src={fourthImage} className="img-fluid" />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="d-flex fourthImageMask">
          <Col md="8">
            <Image src={maskOne} className="img-fluid" />
          </Col>
          <Col md="4">
            <Image src={maskTwo} className="img-fluid" />
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default ForthHome;
