import React from "react";
import "../assets/style/Style.css";
import { Card, Container, Badge, Row, Col } from "react-bootstrap";
import cover from "../assets/images/cover.png";
import CommentSection from "../components/CommentSection";

const PreviewBlog = () => {
  const [display, setDisplay] = React.useState("block");
  const [elementName, setElementName] = React.useState("Hide Content");

  const handleClick = (e) => {
    e.preventDefault();
    if (display === "block") {
      setDisplay("none");
      setElementName("Show Content");
    } else {
      setDisplay("block");
      setElementName("Hide Content");
    }
  };
  return (
    <main className="pt-5">
      <Container fluid className="mt-5 d-flex justify-content-center">
        <Card className="w-50 p-5">
          <Card.Img variant="top" src={cover} />
          <Card.Body>
            <Badge bg="primary" className="p-2">
              Artificial Intelligent
            </Badge>{" "}
            <Badge bg="secondary" className="p-2">
              Developer
            </Badge>{" "}
            <Card.Title className="py-3 fs-2 fw-bold">
              Bringing customers close to their favourite merchants
            </Card.Title>
            <Row className="border-4 border-bottom pb-3">
              <Col className="d-flex flex-row justify-content-start">
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <div className="like p-2 me-2 cursor">
                  <span className="ms-1">Bikram Oli</span> |
                  <span className="ms-1">March 12</span>
                </div>
              </Col>
              <Col className="d-flex flex-row justify-content-end">
                <div className="like p-2 me-2 cursor">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <span className="social-icon-value ms-1">100k</span>
                </div>
                <div className="like p-2 me-2 cursor">
                  <i className="bi bi-share-fill text-secondary"></i>
                  <span className="social-icon-value ms-1">5k</span>
                </div>
              </Col>
            </Row>
            <Container fluid className=" my-3" style={{ display: display }}>
              <strong>Paragraph One</strong>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract See. See how pivoting to Webflow
                changed one person’s sales strategy. See how pivoting to Webflow
                changed one person’s sales strategy and allowed him to attract
                See. See how pivoting to Webflow changed one person’s sales
                strategy. See how pivoting to Webflow changed one person’s sales
                strategy and allowed him to attract See. See how pivoting to
                Webflow changed one person’s sales strategy. See how pivoting to
                Webflow changed one person’s sales strategy and allowed him to
                attract See. See how pivoting to Webflow changed one person’s
                sales strategy. See how pivoting to Webflow changed one person’s
                sales strategy and allowed him to attract See. See how pivoting
                to Webflow changed one person’s sales strategy.
              </p>
              <strong>Paragraph One</strong>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract See. See how pivoting to Webflow
                changed one person’s sales strategy. See how pivoting to Webflow
                changed one person’s sales strategy and allowed him to attract
                See. See how pivoting to Webflow changed one person’s sales
                strategy. See how pivoting to Webflow changed one person’s sales
                strategy and allowed him to attract See. See how pivoting to
                Webflow changed one person’s sales strategy. See how pivoting to
                Webflow changed one person’s sales strategy and allowed him to
                attract See. See how pivoting to Webflow changed one person’s
                sales strategy. See how pivoting to Webflow changed one person’s
                sales strategy and allowed him to attract See. See how pivoting
                to Webflow changed one person’s sales strategy.
              </p>
            </Container>
            <div>
              <a className="text-primary" onClick={handleClick}>
                {elementName}
              </a>
            </div>
          </Card.Body>
          {/* --------Comment---------- */}
          <CommentSection />
          {/* <div className="container-fluid mt-5 mb-5 bg-secondary">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md">
                <div className="card">
                  <div className="p-3">
                    <h6>Comments</h6>
                  </div>

                  <div className="d-flex flex-row p-3">
                    <img
                      src="https://i.imgur.com/3J8lTLm.jpg"
                      width="40"
                      height="40"
                      className="rounded-circle mr-3"
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <span className="mr-2">Seltos Majito</span>
                          <small className="c-badge">Top Comment</small>
                        </div>
                        <small>2h ago</small>
                      </div>
                      <p className="text-justify comment-text mb-0">
                        Tellus in hac habitasse platea dictumst vestibulum.
                        Lectus nulla at volutpat diam ut venenatis tellus.
                        Aliquam etiam erat velit scelerisque in dictum non
                        consectetur. Sagittis nisl rhoncus mattis rhoncus urna
                        neque viverra justo nec. Tellus cras adipiscing enim eu
                        turpis egestas pretium aenean pharetra. Aliquam faucibus
                        purus in massa.
                      </p>
                      <div className="d-flex flex-row user-feed">
                        <span className="wish">
                          <i className="fa fa-heartbeat mr-2"></i>14
                        </span>
                        <span className="ml-3">
                          <i className="fa fa-comments-o mr-2"></i>Reply
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row p-3">
                    <img
                      src="https://i.imgur.com/agRGhBc.jpg"
                      width="40"
                      height="40"
                      className="rounded-circle mr-3"
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <span className="mr-2">Maria Santola</span>
                          <small className="c-badge">Top Comment</small>
                        </div>
                        <small>12h ago</small>
                      </div>
                      <p className="text-justify comment-text mb-0">
                        Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies
                        mi quis hendrerit dolor. Arcu bibendum at varius vel
                        pharetra vel turpis nunc eget. Habitasse platea dictumst
                        quisque sagittis purus sit amet volutpat. Urna
                        condimentum mattis pellentesque id.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam
                      </p>
                      <div className="d-flex flex-row user-feed">
                        <span className="wish">
                          <i className="fa fa-heartbeat mr-2"></i>54
                        </span>
                        <span className="ml-3">
                          <i className="fa fa-comments-o mr-2"></i>Reply
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Card>
      </Container>
    </main>
  );
};
export default PreviewBlog;
