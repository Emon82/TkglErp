import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React,{useState} from "react";


function Container({title,text,text1}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <CardGroup>
      <Card style={{height:"400px", border:"1px solid",borderRadius:"5px",marginTop:"20px",fontFamily:"inherit"}}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text.map( item=> (
           <li>{item.text} {expanded && <>{item.text1} </>}{""}</li>
           

            ) )}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Readless" : "...Readmore"}
            </span>{" "}
           
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
  );
}

export default Container;
