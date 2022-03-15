import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Card, Button } from "react-bootstrap";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
  email: Yup.string().email("Invalid email").required("Email Required"),
});

const NewLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    if (
      values.email === "admin@admin.com" &&
      values.password === "admin12345"
    ) {
      navigate("/");
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  };

  return (
    <Container id="main-container" className="d-grid mt-5 p-5">
      <Card className="main-container-card p-5">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form id="sign-in-form">
                <h1 className="mb-3 fs-3 fw-bold text-white text-center">
                  SIGN IN
                </h1>
                <div className="d-flex flex-column">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="signin-input p-3 my-3"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="signin-input p-3 my-3"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check2"
                      name="option2"
                      value="something"
                    />
                    <label className="form-check-label text-white" for="check2">
                      Stay Signed In
                    </label>
                  </div>
                  <Button
                    type="submit"
                    id="btn"
                    disabled={isSubmitting}
                    className="rounded-50 my-5"
                  >
                    Sign In
                  </Button>
                </div>
                <a className="text-white">Forget Password?</a>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </Container>
  );
};

export default NewLogin;
