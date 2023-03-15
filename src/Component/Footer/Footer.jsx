import {
    faEnvelope, faMapMarker,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import logo3 from "../../asserts/Khoz.png";
import logo2 from "../../asserts/prostuti.png";
import logo1 from "../../asserts/win.png";
import logo4 from "../../asserts/erp2.png";
import tkgl from "../../asserts/tkgl.jpg";
import "./Footer.css";

function ITCompanyFooter() {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          <Col lg={4} md={6}>
           <a href="https://www.techknowgram.com/"><img style={{height:"100px",borderRadius:"10px"}} src= {tkgl} alt="" /></a>
            <p>
              TechKnowGram Limited is a global solution provider led by experts
              having more than 25 years of professional experiences in both the
              local and global arena specially for Japan ICT market for last 20
              years as well as USA & Europe market. The company particularly
              provides web-based customized solutions on ERP, AI, Data
              Analytics, Robotics, Embedded Solutions with Beacon, AR, VR
              Applications and Gaming and Animation.{" "}
            </p>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-center"> Others Products</h5>
            <ul className="list-unstyled lawra">
              <li>
                <a target={"_blank"} href="https://quizwin.xyz/">
                  <img
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      width: "110px",
                      borderRadius:"5px"
                    }}
                    src={logo1}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a target={"_blank"} href="http://prostuti.net/">
                  <img
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      width: "110px",
                      borderRadius:"5px"
                    }}
                    src={logo2}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a target={"_blank"}  href="https://tkgerp.com/">
                  <img
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      width: "110px",
                      borderRadius:"5px"
                    }}
                    src={logo4}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faMapMarker} />  5/9 Block/B,Lalmatia, Mohammdapur,<br />
                Dhaka 1207,BANGLADESH
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> Mobile/Whatsapp: 01819250309 <br />
                Phone: +88 02 5508199
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
                info@techknowgram.com
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5>Follow us:</h5>
            <ul className="list-unstyled tera">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-linkedin"></i></li>
            
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">&copy;  TechKnowGram Limited. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ITCompanyFooter;
