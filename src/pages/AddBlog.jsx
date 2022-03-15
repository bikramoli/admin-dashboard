import React from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { Container, Col, Form, Card, Button } from "react-bootstrap";
import HeaderTitle from "../components/HeaderTitle";

import Header from "../components/Header";

const AddBlog = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [fileData, setFileData] = React.useState();

  const navigate = useNavigate();
  return (
    <main className="pt-5">
      <Container fluid className="mt-5">
        <Button
          variant="link"
          className="text-black"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <i class="bi bi-arrow-left"></i> Back
        </Button>
        <div className="container-fluid  ">
          {/* ------header------ */}
          <div className="row py-4">
            <div className="col-sm-6">
              <HeaderTitle
                title="Add Blog"
                description="You can add new blog here"
              />
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-end">
                <div className="ps-2">
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/previewblog");
                    }}
                  >
                    <i class="bi bi-eye pe-1"></i>
                    Preview
                  </button>
                </div>
                <div className="ps-2">
                  <button
                    className="btn-addblog btn btn-light px-4"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/addblog");
                    }}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ----------header------- */}
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="email" placeholder="Blog Title here..." />
              </Form.Group>
              <MDEditor value={value} onChange={setValue} height={450} />
            </div>
            <div className="col-md-3">
              <label htmlFor="" className="mb-2">
                Featured Image
              </label>
              <Card
                style={{
                  height: "150px",
                }}
              >
                {fileData && (
                  <Card.Img
                    className="form__img"
                    src={URL.createObjectURL(fileData)}
                    height="150"
                    alt="img"
                  />
                )}
              </Card>
              <Button variant="light" className="w-100 my-2">
                <input
                  id="file"
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={(event) => setFileData(event.target.files[0])}
                />
              </Button>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="Description"
                  placeholder="Blog Description here..."
                />
              </Form.Group>
              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                >
                  <option selected>Featured</option>
                  <option value="1">Featured</option>
                  <option value="2">Featured</option>
                  <option value="3">Featured</option>
                </select>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Categories</Form.Label>
                <Form.Control
                  as="textarea"
                  type="Description"
                  placeholder="Blog Description here..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tags </Form.Label>
                <Form.Control
                  as="textarea"
                  type="Description"
                  placeholder="Blog Description here..."
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-between">
                <Form.Label>Comment Section</Form.Label>
                <Form.Check type="switch" id="custom-switch" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <p className="text-primary">Save Draft</p>
                <p className="text-danger">Move to Trash</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default AddBlog;
