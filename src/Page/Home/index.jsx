// import React,{useState} from "react";
import Banner from "../../Component/Banner/Banner";
import Container from "../../Component/Card/Card";
// import Container1 from "../../Component/Conainer1/Container1";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import image1 from "../../asserts/banner.jpg"


export default function Home() {
  
  const IntroctionToKhoz = [
    {
      title: "Introduction to Khoz",
      text: [
        "Now a days visitor face many problems inside large fair like BASIS SoftExpo in which how to know their location, their destination ,stall information and how to go to there with short route without need of anyone help.",
        " With the help of our KHOZ application these problems have been solved and user can view all the stall list, each stall information, stall location, promotional information about stall and navigate to selected stall.",

        
       ],
        
      text1:[
        
        " On the other hand stall owners can promote their stall products,their other information by our KHOZ application.",

      ]
    },
  ];
  const KhozAdminPanel = [
    {
      title: "In this project we have two parts. Admin panel & Application (iOS & Android).",
      text: [
        "Here we upload Basis SoftExpo floor map.",
        "We will add stall location into the map including promotional and product details",
        "Visitor will install the application by scanning QR code at entry",
      "They can see the total floor map and stall locations. ",
      "Visitor can see their own location in map using beacon.",
       
      ],
      text1:[ 
      "Visitor can search specific stall and navigate.",
      "Visitor can see product and promotional information of which stall they visiting.",]
    },
  ];
  const AppicationKhoz = [
    {
      title: "Application Home Screen (iOS & Android)",
      text: [
        "Visitor need to register by using their facebook or google account to use the application.",
        "Visitor can see whole floor map & all stalls.       ",
        "Visitor can see their current location & current zone.",
        "Visitor can search specific stall and can navigate there.      ",
        "Visitor can see product and promotional information, branding       ",
      ],
      text1: [
        "website of which stall  they are visiting.",
        "Visitor can identify the stall they visited before by check mark. ",
      ],
    },
  ];
  

  
  const KhozStallList = [
    {
      title: "Stall list",
      text: [
        "Here visitor can select a destination of stalls by searching.",
        "List of stall represent stall logo, stall name & short details about stall. ",
        "After selecting any specific stall then visitor can view routes in the map. ",
        "Visitor can view selected stall promotional details, product, branding and website.",

       
      ],
      
    },
  ];
  const KhozConclusion = [
    {
      title: "Conclusion",
      text: [
        "Khoz applications real motive is to make easy fair navigating system for visitors using beacon technology.     ",
        "Without anyone’s help visitor can navigate whole fair ",
        "To know all the stall information by our application",
        " Represent stall promotional, product ",
        
       
      ],
      text1:[
        "details and branding to the Visitors.",
       
        " This project will saves time for visitor.",
      ]
    },
  ];
  const KhozAdminDashorard = [
    {
      title: "KHOZ Admin Dashboard",
      text: [
        "Here we upload fair/floor map and set stall positions",
        "We can add each stalls various information such as promotional products, their contacts and branding websites.",
      ],
      
    },
  ];

 
  return (
    <div>
      <Header />
      <Banner image={image1} />
      <div className="container">
        <div className="row" style={{ marginTop: "20px", padding: "10px" }}>
          {IntroctionToKhoz.map(({ title, text,text1}) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1} />
              </div>
            );
          })}
          {KhozAdminPanel.map(({ text, title,text1}) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1}/>
              </div>
            );
          })}


{AppicationKhoz.map(({ text, title,text1 }) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1} />
              </div>
            );
          })}
         
        </div>
       

        <div className="row">
         

          {KhozStallList.map(({ text, title,text1 }) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1}/>
              </div>
            );
          })}
          {KhozConclusion.map(({ text, title,text1 }) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1} />
              </div>
            );
          })}
           {KhozAdminDashorard.map(({ text, title,text1 }) => {
            return (
              <div className="col-md-4">
                <Container title={title} text={text} text1={text1} />
              </div>
            );
          })}
        </div>

      </div>
      <Footer/>
    </div>
  );
}
