import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Alert from "react-bootstrap/Alert";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={`${styles.Container} ${styles.SignInContainer}`}>
      <Row className={`d-flex align-items-center`}>
        <Col className="my-auto py-4 p-md-5 mx-auto" md={6}>
          <Container className={`${appStyles.Content} p-5 shadow-lg rounded`}>
            <h1 className={`${styles.Header} text-center mb-4`}>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="sr-only">Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={`${styles.Input} p-3 rounded`}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group className="mb-3" controlId="password1">
                <Form.Label className="sr-only">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password1"
                  className={`${styles.Input} p-3 rounded`}
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group className="mb-3" controlId="password2">
                <Form.Label className="sr-only">Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  className={`${styles.Input} p-3 rounded`}
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Button
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} w-100 mt-4`}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Container>
          <Container className={`mt-3 text-center`}>
            <Link className={styles.Link} to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
