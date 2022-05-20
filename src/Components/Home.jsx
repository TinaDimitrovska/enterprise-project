import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Btn from "./Btn";
import Press from "./Press";
import Media from "./Media";
import Footer from "./Footer";
import Popup from "./Popup";

export default function Home() {
  const [active, setActive] = useState("In the News");

  return (
    <div className="background">
      <div className="margin">
        <h1 className="title">
          Enterprise League
          <span>{active === "In the News" && "In the News"}</span>{" "}
          <span>{active === "Press" && "Press"}</span>
        </h1>
        <Button className="buttons" onClick={() => setActive("In the News")}>
          In the News
        </Button>
        <Button className="buttons" onClick={() => setActive("Press")}>
          Press
        </Button>
        {active === "In the News" && <Btn />}
        {active === "Press" && <Press />}
        <Popup/>
        <Media />
        <Footer />
      </div>
    </div>
  );
}
