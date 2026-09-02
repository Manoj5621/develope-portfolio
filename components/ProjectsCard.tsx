import React from "react";
import { Card, CardBody, CardImg, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, subtitle, desc, techStack, image, github, link }: ProjectType) => {
  const truncateDesc = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
      <Card className="shadow-lg--hover shadow h-100 border project-card" style={{ borderWidth: '1px', borderColor: '#e0e0e0', borderRadius: '8px' }}>
        {image && (
          <CardImg top src={image} alt={name} className="project-image" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
        )}
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4 w-100">
              <h3>{name}</h3>
              {subtitle && <h5 className="text-muted mt-2 mb-3">{subtitle}</h5>}
              <p className="description mt-3">{truncateDesc(desc)}</p>
              {techStack && techStack.length > 0 && (
                <div className="tech-stack mt-3">
                  {techStack.map((tech, index) => (
                    <span key={index} className="badge badge-pill badge-info mr-2 mb-1" style={{ fontSize: '0.75rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4">
                {github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Demo"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
