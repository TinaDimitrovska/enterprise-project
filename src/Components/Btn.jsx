import React from "react";
import { Button, Card } from "react-bootstrap";
import news from "../data";

export default function Btn() {

  return (
    <div className="news">
      {" "}
      {news.map((item) => {
        return (
          <Card key={item.title} className="cards">
            <Card.Img src={`./img/${item.img}.png`} alt="" className="img" />
            <Card.Body style={{textAlign: "left"}}>
              <Card.Title>{item.title}</Card.Title>
              <br/>
              <Card.Text>{item.text}</Card.Text>
              <br />
              <br/>
              <footer className="blockquote-footer">{item.author}</footer>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
