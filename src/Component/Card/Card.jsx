import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Container({ title, text, text1 }) {
  const [Expanded, setExpanded] = useState(false);
  return (
    <CardGroup>
      <Card
        style={{
          // height: "525px",
          border: "1px solid",
          borderRadius: "5px",
          marginTop: "20px",
          fontFamily: "inherit",
        }}
      >
        {/* <Card.Img variant="top" style={{height:"300px"}} src={src} /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text.map((item) => (
              <li>{item}</li>
            ))}
            {Expanded && (
              <>
                {" "}
                {text1 && text1.length && text1.map((item) => <li>{item}</li>)}
              </>
            )}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setExpanded(!Expanded)}
            >
              {text1 && text1.length && (
                <>{Expanded ? "Readless" : "...Readmore"}</>
              )}
            </span>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Container;
