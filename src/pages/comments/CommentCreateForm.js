import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setContent(newValue);
    console.log("Content:", newValue); // Debugging log
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent(""); // Clear the comment input after submission
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className={styles.CommentForm} onSubmit={handleSubmit}>
      <Form.Group className={styles.FormGroup}>
        <InputGroup className={`align-items-center ${styles.InputGroup}`}>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={`${styles.TextArea} flex-grow-1`} // Custom textarea styles
            placeholder="Add a comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
          <button
            className={`${styles.PostButton} ${content.trim() ? styles.ActiveButton : ""} btn ml-2`} // Apply active class if content exists
            disabled={!content.trim()} // Disable button if content is empty
            type="submit"
          >
            Post
          </button>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default CommentCreateForm;
