import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Faq.css";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }, []);

  return (
    <Container>
      <Row>
        <Col className="text-center" lg={12}>
          <h1>FAQ</h1>
          <p>Često postavljana pitanja</p>
          <h2>Pitanje</h2>
          <p>Odgovor</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;
