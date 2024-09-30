import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-5 mx-auto text-center" md={6}>
        <Container>
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
            .form-label {
              text-align: left; /* Align labels to the left */
              font-weight: bold; /* Bold labels */
              margin-bottom: 0.5rem; /* Space below labels */
            }
            .Button {
              font-size: 0.75rem; /* Smaller font size */
              font-weight: 500; /* Medium weight for emphasis */
              align-self: center;
              border-radius: 30px; /* Less rounded for a sleek look */
              border: 2px solid transparent; /* Keeps border structure */
              padding: 6px 15px; /* Reduced padding for smaller buttons */
              margin: 2px; /* Smaller margin for tighter spacing */
              min-width: 70px; /* Slightly smaller minimum width */
              background-color: #6a994e; /* Primary button color */
              color: #ffffff; /* Text color */
              transition: background-color 0.3s ease, transform 0.2s; /* Smooth transitions */
            }
            .Button:hover {
              opacity: 0.9; /* Slightly less opaque on hover */
              cursor: pointer;
              background-color: #5a8745; /* Darker shade for hover effect */
              transform: translateY(-1px); /* Subtle lift effect */
            }
            .Button:active {
              background-color: #4b7a38; /* Darker for active state */
              transform: translateY(1px); /* Subtle push down effect */
            }
            .Button:focus {
              outline: none; /* Remove default outline */
              box-shadow: 0 0 0 3px rgba(106, 153, 78, 0.5); /* Custom focus ring */
            }
          `}</style>
          <h2 className="title">Change Password</h2>
          <Form onSubmit={handleSubmit} className="form-container">
            <Form.Group>
              <Form.Label className="form-label">New Password</Form.Label>
              <Form.Control
                className="input-field"
                placeholder="New password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
                required
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className="form-label">Confirm Password</Form.Label>
              <Form.Control
                className="input-field"
                placeholder="Confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
                required
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <div className="button-container">
              <Button
                className="Button" // Using custom Button class
                variant="secondary"
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="Button" // Using custom Button class
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

export default UserPasswordForm;
