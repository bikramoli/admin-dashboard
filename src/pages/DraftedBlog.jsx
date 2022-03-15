import React from "react";
import { ArchivedBlogsData } from "../assets/data/ArchivedBlogsData";
import HeaderTitle from "../components/HeaderTitle";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
} from "react-bootstrap";

const DraftedBlog = () => {
  return (
    <>
      <main className="p-3 py-3 mt-5">
        <Container>
          <div className="py-5">
            <div className="mb-5">
              <HeaderTitle
                title="Drafted Blogs"
                description="The age which we are living is the age of democracy"
              />
            </div>
            <Row className="">
              <Col md={4}>
                <Form.Control type="email" placeholder="Search here..." />
              </Col>
              <Col md={{ span: 4, offset: 4 }} className="text-end pe-3">
                <Row>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Last week
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item className="text-dark" href="#/action-1">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="text-dark" href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="text-dark" href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col xs={2}>
                    <Button className="bg-white">
                      <i className="bi bi-three-dots-vertical text-dark"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Card>
            <Card.Header className="bg-primary text-white">
              <Row>
                <Col xs={6}>
                  <Form.Check type="checkbox" label="Title"></Form.Check>
                </Col>
                <Col>Archived Date</Col>
                <Col>Author</Col>
                <Col>Types</Col>

                <Col xs={1} className=" bi-three-dots"></Col>
              </Row>
            </Card.Header>
            {ArchivedBlogsData.map((data, index) => (
              <Card.Body key={index}>
                <Row>
                  <Col xs={6}>
                    <Form.Check type="checkbox" label={data.title}></Form.Check>
                  </Col>
                  <Col className="text-secondary">
                    <p className="mb-0">{data.published}</p>
                    <p>08:24 PM</p>
                  </Col>
                  <Col className="text-secondary">{data.author}</Col>
                  <Col className="text-secondary">{data.type}</Col>

                  <Col xs={1} className=" bi-three-dots"></Col>
                </Row>
              </Card.Body>
            ))}
          </Card>
        </Container>
      </main>
    </>
  );
};
export default DraftedBlog;
