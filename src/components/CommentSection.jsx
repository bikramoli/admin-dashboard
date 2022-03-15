import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RecentCommentsData } from "../assets/data/RecentCommentsData";

const CommentSection = () => {
  return (
    <Container fluid className="border-bottom">
      <h6>6 Comments</h6>
      <div className="d-flex flex-row my-3">
        <h6>Show more comment</h6>
        <i className="bi bi-chevron-down ms-2"></i>
      </div>
      {RecentCommentsData.map((data, id) => {
        return (
          <Row className="border-4 pb-3">
            <Col xs={2} className="d-flex flex-row justify-content-start ">
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="60"
                height="60"
                className="rounded-circle"
              />
            </Col>
            <Col className="">
              <div className="like py-2 me-2 cursor">
                <strong>Bikram Oli </strong> |
                <span className="ms-1">23 Feburary, 2022 02:50 PM</span>
              </div>
              <Card className="comment-card p-3">
                <Card.Text className="mb-0">
                  The age which we are living is the age of the democracy.
                  According to the Abhram Lincon the sixteenth president of the
                  USA, Democray is govern by people for people and by the people
                </Card.Text>
                <div className="cursor">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <span className="social-icon-value ms-1">500</span>
                </div>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
export default CommentSection;
