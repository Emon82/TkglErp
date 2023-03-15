import React from 'react'
import Banner from '../../Component/Banner/Banner'
import ITCompanyFooter from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import image1 from "../../asserts/aboutCover.jpg"

export default function About() {
  return (
    <div>
      <Header/>
      <Banner image={image1}/>
      <div className="container">
      <div className="">
          <h1 className="text-center" style={{ margin: "20px",fontFamily:"sans-serif",fontWeight:"bold" }}>
            About Khoz
          </h1>
          <p className="text-justify " style={{fontFamily:"sans-serif"}}>
          KHOZ is a recently developed project for Beacon-based Indoor Navigation System that incorporates IoT technology to deliver precise and up-to-date location data to users navigating indoor environments. The system operates by using beacons - small, cost-effective, and battery-powered devices that emit a Bluetooth signal that mobile devices like smartphones can detect. Ideal solution for event management at supermarkets for location and promotions.
            
          </p>
        </div>
        <div className="">
          <h1 className="text-center" style={{ margin: "20px",fontFamily:"sans-serif",fontWeight:"bold" }}>
            About TechKnowGram Limited
          </h1>
          <p className="text-justify" style={{fontFamily:"sans-serif"}}>
            TechKnowGram Limited is a global solution provider led by experts
            having more than 25 years of professional experiences in both the
            local and global arena specially for Japan ICT market for last 20
            years as well as USA & Europe market. The company particularly
            provides web-based customized solutions on ERP, AI, Data Analytics,
            Robotics, Embedded Solutions with Beacon, AR, VR Applications and
            Gaming and Animation. TechKnowGram Limited is an ISO 9001: 2015, ISO
            14001: 2015 and ISO/IEC 27001: 2013 certified company and is a
            member of Bangladesh Association of Software BASIS, Bangladesh and
            Japan Chamber of Commerce & Industries (JBCCI), Bangladesh Computer
            Samity BCS, Bangladesh Association of Call Centers and Outsourcing
            BACCO, Ecommerce Association of Bangladesh e-CAB, CTO Forum of
            Bangladesh and SheTrades Commonwealth Program by International Trade
            Centre ITC.
          </p>
        </div>
        </div>
      <ITCompanyFooter/>
    </div>
  )
}
