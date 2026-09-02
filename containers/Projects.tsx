import React, { useState } from "react";
import { projects } from "../portfolio";
import { Container, Row, Col, Button } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showMore, setShowMore] = useState(true);

  const displayedProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    const remaining = projects.length - visibleCount;
    setVisibleCount(prev => prev + Math.min(6, remaining));
  };

  return (
    projects && (
      <section className="section my-4">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-stretch g-4">
            {displayedProjects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
          {hasMore && (
            <div className="text-center mt-4">
              <Button 
                color="info" 
                size="lg" 
                onClick={handleLoadMore}
                className="px-5"
              >
                Load More
              </Button>
            </div>
          )}
        </Container>
      </section>
    )
  );
};

export default Projects;
