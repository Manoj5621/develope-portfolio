import { whatImDoing } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Fade from "react-reveal/Fade";

const WhatImDoing = () => {
  return (
    whatImDoing && (
      <Fade bottom duration={2000}>
        <section className="section section-lg bg-white">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape shadow rounded-circle text-info" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  <i className="fa fa-briefcase text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Technical Expertise</h4>
              </div>
            </div>
            <Row className="g-4">
              {whatImDoing.map((data, i) => {
                return (
                  <Col key={i} lg={4} md={6} sm={12}>
                    <div className="card h-100 shadow-sm border-0 bg-white">
                      <div className="card-body text-center p-4">
                        <div className="icon icon-shape icon-lg shadow rounded-circle mx-auto mb-3" style={{ 
                          background: "rgba(255, 255, 255, 0.15)", 
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)"
                        }}>
                          <img src={data.icon} alt={data.title} className="icon-img" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                        </div>
                        <h5 className="card-title text-dark">{data.title}</h5>
                        <p className="card-text text-muted">{data.description}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default WhatImDoing;