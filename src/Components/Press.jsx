import React, { useState } from "react";
import press from "../pressData";
import { Card, Button, Collapse } from "react-bootstrap";

export default function Press() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (id) => {
    setActiveIndex(id !== activeIndex ? id : null);
    setOpen((l) => !l);
  };

  return (
    <div className="press">
      {" "}
      {press.map((item) => {
        return (
          <Card key={item.id} className="shadow">
            <img src={`./img/${item.img}.png`} alt="" className="image" />
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title>{item.title}</Card.Title>
              <br />
              <p>{item.secondTitle}</p>
              <Card.Text>{item.text}</Card.Text>

              {activeIndex === item.id && (
                <Collapse in={open}>
                  <div>
                    {item.paragraph}
                    <br />
                    {item.author}
                    <br />
                    {item.span}
                  </div>
                </Collapse>
              )}

              <Button
                className="readMore"
                onClick={() => handleClick(item.id)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {!open ? "Read More" : "Read Less"}
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
