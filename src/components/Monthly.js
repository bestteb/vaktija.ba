import React, { useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import momentHijri from "moment-hijri";
import "moment-timezone";
import "moment-duration-format";
import "moment/locale/bs";
import "./Monthly.css";

function Monthly({ theme, monthly, location }) {
  // const [year, setYear] = useState(new Date().getFullYear());
  const year = new Date().getFullYear();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const monthlyVaktija = monthly(location, year, month);

  return (
    <Container>
      <Row>
        <Col
          className="text-center"
          sm={12}
          md={12}
          lg={{ span: 10, offset: 1 }}
        >
          <br />
          <Row>
            <Col className="text-right" lg={3}>
              {month > 1 ? (
                <FontAwesomeIcon
                  className={theme}
                  icon={["fas", "chevron-left"]}
                  size="1x"
                  onClick={() => {
                    console.log(month);
                    if (month > 1) {
                      setMonth(month - 1);
                    }
                  }}
                />
              ) : null}
            </Col>
            <Col className="text-center" lg={6}>
              <h3 className={`monthly monthly-${theme}`}>
                {moment(`${year}-${month}`, "YYYY-MM").format("MMMM YYYY")}
                {/* {moment().format("MMMM YYYY")} */}
              </h3>
            </Col>
            <Col className="text-left" lg={3}>
              {month < 12 ? (
                <FontAwesomeIcon
                  className={theme}
                  icon={["fas", "chevron-right"]}
                  size="1x"
                  onClick={() => {
                    console.log(month);
                    if (month < 12) {
                      setMonth(month + 1);
                    }
                  }}
                />
              ) : null}
            </Col>
          </Row>

          <br />
          <br />
          <Table responsive className={`${theme}`}>
            <thead>
              <tr>
                <th className="monthly text-center" colSpan={2}>
                  Dan
                </th>
                <th className="monthly text-center">Zora</th>
                <th className="monthly text-center">Izlazak sunca</th>
                <th className="monthly text-center">Podne</th>
                <th className="monthly text-center">Ikindija</th>
                <th className="monthly text-center">Akšam</th>
                <th className="monthly text-center">Jacija</th>
              </tr>
            </thead>
            <tbody>
              {monthlyVaktija.days.map((d, index) => (
                <tr key={index}>
                  <td className="monthly text-right">
                    {momentHijri(`${year}-${month}-${index + 1}`, "YYYY-M-D")
                      .tz("Europe/Sarajevo")
                      .format("iD")
                      .toLowerCase() === "1" ? (
                      <span className="monthly-gregorian underline">
                        {index + 1}
                      </span>
                    ) : (
                      <span className="monthly-gregorian">{index + 1}</span>
                    )}
                  </td>
                  <td className="monthly text-left">
                    {momentHijri(`${year}-${month}-${index + 1}`, "YYYY-M-D")
                      .tz("Europe/Sarajevo")
                      .format("iD")
                      .toLowerCase() === "1" || index === 0 ? (
                      <>
                        <div className="monthly day">
                          {moment(`${year}-${month}-${index + 1}`, "YYYY-M-D")
                            .tz("Europe/Sarajevo")
                            .format("ddd")
                            .toLowerCase()}
                        </div>
                        <div className={`monthly-hijri pair-${theme}`}>
                          {momentHijri(
                            `${year}-${month}-${index + 1}`,
                            "YYYY-M-D"
                          )
                            .tz("Europe/Sarajevo")
                            .format("iD. iMMMM iYYYY")
                            .toLowerCase()}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="monthly day">
                          {moment(`${year}-${month}-${index + 1}`, "YYYY-M-D")
                            .tz("Europe/Sarajevo")
                            .format("ddd")
                            .toLowerCase()}
                        </div>{" "}
                        <div className="monthly-hijri">
                          {momentHijri(
                            `${year}-${month}-${index + 1}`,
                            "YYYY-M-D"
                          )
                            .tz("Europe/Sarajevo")
                            .format("iD")
                            .toLowerCase()}
                        </div>
                      </>
                    )}
                  </td>
                  <td className="monthly text-center">{d.vakat[0]}</td>
                  <td className="monthly text-center">{d.vakat[1]}</td>
                  <td className="monthly text-center">{d.vakat[2]}</td>
                  <td className="monthly text-center">{d.vakat[3]}</td>
                  <td className="monthly text-center">{d.vakat[4]}</td>
                  <td className="monthly text-center">{d.vakat[5]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Monthly;
