import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // State to handle success message

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      setSuccess(true); // Set success to true on successful update
      setTimeout(() => {
        history.goBack(); // Redirect after a short delay
      }, 2000);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-5 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <style>{`
            .form-container {
              background-color: #f8f9fa; /* Light background for contrast */
              padding: 2rem;
              border-radius: 8px; /* Rounded corners */
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            }
            .title {
              margin-bottom: 1.5rem;
              font-size: 1.5rem;
              font-weight: bold;
            }
            .input-field {
              border-radius: 5px; /* Rounded input fields */
              padding: 0.75rem; /* Padding for input fields */
              border: 1px solid #ced4da; /* Border color */
              transition: border-color 0.3s; /* Transition effect */
              width: 100%; /* Full width */
            }
            .input-field:focus {
              border-color: #80bdff; /* Highlight border on focus */
              box-shadow: 0 0 5px rgba(128, 189, 255, 0.5); /* Shadow on focus */
            }
            .button-container {
              display: flex;
              justify-content: space-between;
              margin-top: 1rem; /* Space above buttons */
            }
          `}</style>
          <h2 className="title">Change Username</h2>
          <Form onSubmit={handleSubmit} className="my-2 form-container">
            <Form.Group>
              <Form.Control
                className="input-field"
                placeholder="Enter new username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {success && (
              <Alert variant="success">Username updated successfully!</Alert>
            )}
            <div className="button-container">
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                type="submit"
              >
                Save
              </Button>
            </div>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
