import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import { ArchivedBlogsData } from "../assets/data/ArchivedBlogsData";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
} from "react-bootstrap";

const AllBlogs = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="py-3">
        <Container>
          <div className="py-5">
            <div className="mb-5">
              <div className="row pt-4">
                <div className="col-sm-6">
                  <HeaderTitle
                    title="Active Blogs"
                    description="This is Active blog section"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="d-flex justify-content-end">
                    <div className="ps-2">
                      <button
                        className="btn-addblog btn btn-secondary"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/addblog");
                        }}
                      >
                        Add blog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                <Col xs={4}>
                  <Form.Check type="checkbox" label="Title"></Form.Check>
                </Col>
                <Col>Published Date</Col>
                <Col>Author</Col>
                <Col>Types</Col>
                <Col>Likes</Col>
                <Col>Views</Col>
                <Col>Shares</Col>
                <Col xs={1} className=" bi-three-dots"></Col>
              </Row>
            </Card.Header>
            {ArchivedBlogsData.map((data, index) => (
              <Card.Body key={index}>
                <Row>
                  <Col xs={4}>
                    <Form.Check type="checkbox" label={data.title}></Form.Check>
                  </Col>
                  <Col className="text-secondary">
                    <p className="mb-0">{data.published}</p>
                    <p>08:24 PM</p>
                  </Col>
                  <Col className="text-secondary">{data.author}</Col>
                  <Col className="text-secondary">{data.type}</Col>
                  <Col className="text-secondary">{data.likes}k</Col>
                  <Col className="text-secondary">{data.views}k</Col>
                  <Col className="text-secondary">{data.shares}</Col>
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
export default AllBlogs;
