import React from "react";
import "./module.css";
import { Col, Row } from "reactstrap";
import HomeImage from '../asset/home-1.png'
import Image from "next/image";
function Home() {
  return (
    <>
      <Row className="firsthomePage">
        <Col md="8" className="section-one">
          <h1>
            <b>
              Build your business <br />
              here and now
            </b>
          </h1>
          <h6>
            We help you <b>start , grow</b> and<b>build</b> your
            <b>dream business</b> in UAE
            <br />
            just a few steps and you'll be right on track !{" "}
          </h6>
          <div class="input-container">
            <input type="text" placeholder="Enter your company name" />
            <button>Get started</button>
          </div>
          <div class="toggle-container mt-4">
            <span class="toggle-label">New company</span>
            <label class="toggle-switch">
              <input type="checkbox" id="toggle" />
              <span class="slider"></span>
            </label>
            <span class="toggle-label disabled">Existing company</span>
          </div>
        </Col>
        <Col md="4" xs='5' className="mt-5 mb-4">
          <Image  src={HomeImage} width={400} height={400}/>
        </Col>
      </Row>
    </>
  );
}

export default Home;
