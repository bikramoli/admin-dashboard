import React from "react";
import HeaderTitle from "../components/HeaderTitle";
import { Container, Card, Dropdown } from "react-bootstrap";
import { TopBlogsData } from "../assets/data/TopBlogsData";
import "../assets/style/Style.css";

const RemovedBlogs = () => {
  const [displayType, setDisplayType] = React.useState("none");

  return (
    <main className=" py-5 mt-5">
      <Container fluid>
        <div className="ms-3">
          <HeaderTitle
            title="Removed Blogs"
            description="Here you can find removed blogs, you can remove or restore"
          />
        </div>

        <div className="d-flex flex-wrap">
          {TopBlogsData.map((data, id) => (
            <Card
              className="shadow m-3"
              style={{ width: "25rem", height: "25rem" }}
              key={id}
            >
              <Card.Img src={data.image} height="180" alt="img" />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between fs-6 mb-0">
                  <p>{data.title}</p>

                  <i
                    className=" bi bi-three-dots-vertical"
                    onMouseOver={() => {
                      if (displayType === "none") {
                        setDisplayType("block");
                      } else {
                        setDisplayType("none");
                      }
                    }}
                  ></i>

                  <span>
                    <Dropdown.Menu show style={{ display: `${displayType}` }}>
                      <Dropdown.Item
                        eventKey="2"
                        className="text-dark border-bottom"
                      >
                        Restore
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3" className="text-dark">
                        Remove
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </span>
                </Card.Title>
                <Card.Text className="card-text text-secondary">
                  React-Bootstrap is a front-end framework that was designed
                  keeping react in mind. Bootstrap was re-built and revamped for
                  React, hence it is known as React-Bootstrap. Cards are a type
                  of section or containers which consists of information in a
                  structured and organized way.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
};
export default RemovedBlogs;
