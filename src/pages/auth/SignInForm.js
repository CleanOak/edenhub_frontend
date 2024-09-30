import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={`${styles.Container} ${styles.SignInContainer}`}>
      <Row className={`d-flex align-items-center`}>
        <Col className="my-auto py-4 p-md-5 mx-auto" md={6}>
          <Container className={`${appStyles.Content} p-5 shadow-lg rounded`}>
            <h1 className={`${styles.Header} text-center mb-4`}>Sign In</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="sr-only">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={`${styles.Input} p-3 rounded`}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="sr-only">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={`${styles.Input} p-3 rounded`}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Button
                className={`${btnStyles.Button} ${btnStyles.Wide} ${styles.SubmitButton} w-100 mt-4`}
                type="submit"
              >
                Sign In
              </Button>

              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className={`mt-3 text-center`}>
            <Link className={styles.Link} to="/signup">
              Need an account? <span className={styles.Highlight}>Sign up here</span>.
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInForm;
