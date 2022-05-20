import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function Popup() {
  const [modalShow, setModalShow] = useState(false);
  const [really, setReally] = useState("not really");
  const [money, setMoney] = useState("yes, more money");

  useEffect(() => {
    let timer;
    if (localStorage.getItem("name")) {
      setModalShow(false);
    } else {
      timer = setTimeout(() => setModalShow(true), 10000);
    }
    return () => clearTimeout(timer);
  }, []);

  function notReally() {
    localStorage.setItem("name", JSON.stringify(really));
    setModalShow(false);
  }
  function moreMoney() {
    localStorage.setItem("name", JSON.stringify(money));
    setModalShow(false);
  }

  return (
    <div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title className="modal-header">
            Do you need micro business loans?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="paragraph">
            Quick loans for business, invoice financing and flexible loans
          </p>
          <div className="images">
            <img src={"./img/violet.9459dd7e.png"} alt="" width={180} />
            <img src={"./img/green.f01efa95.png"} alt="" width={180} />
          </div>
          <div className="btns">
            <Button className="violet" onClick={() => notReally()}>
              Not really
            </Button>
            <Button className="green" onClick={() => moreMoney()}>
              Yes! Extra money
            </Button>
          </div>
        </Modal.Body>
      </Modal>{" "}
    </div>
  );
}
