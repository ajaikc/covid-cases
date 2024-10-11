import React from "react";
import { Col, Row } from "reactstrap";

function Footer() {
  return (
    <>
      <Row className="footer">
        <Col md="12">
          <Col md="6" className="leftFooter">
            <h2>Ready to get started ?</h2>
            <h2>
              <b>
                <span class="gradient-text-secondHome">
                  {" "}
                  Build your business now
                </span>{" "}
              </b>
            </h2>
            <p className="mt-3">
              Incooperate your business in the UAE and build it with us
            </p>

            <button className="btn btn-secondary footerBtn mt-3 mb-4">
              {" "}
              Start your business
            </button>
            <span>
              {" "}
              <a href="#" style={{color:"white"}}>Already incoperated</a>
            </span>
          </Col>
          <Col md="6"></Col>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
