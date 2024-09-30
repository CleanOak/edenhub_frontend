import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="d-flex align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className={styles.ProfileLink}>
            <Avatar src={profile_image} height={40} />
            <span className={styles.OwnerName}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.UpdatedAt}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.PostImage} />
      </Link>
      <Card.Body className={styles.PostBody}>
        {title && <Card.Title className={styles.PostTitle}>{title}</Card.Title>}
        {content && <Card.Text className={styles.PostContent}>{content}</Card.Text>}
        <div className={styles.PostBar}>
  {is_owner ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>You can't like your own post!</Tooltip>}
    >
      <div className={styles.HeartContainer}>
        <i className="far fa-heart" />
        <span className={styles.LikeCount}>{likes_count}</span>
      </div>
    </OverlayTrigger>
  ) : like_id ? (
    <span onClick={handleUnlike} className={styles.HeartContainer}>
      <i className={`fas fa-heart ${styles.Heart}`} />
      <span className={styles.LikeCount}>{likes_count}</span>
    </span>
  ) : currentUser ? (
    <span onClick={handleLike} className={styles.HeartContainer}>
      <i className={`far fa-heart ${styles.HeartOutline}`} />
      <span className={styles.LikeCount}>{likes_count}</span>
    </span>
  ) : (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>Log in to like posts!</Tooltip>}
    >
      <div className={styles.HeartContainer}>
        <i className="far fa-heart" />
        <span className={styles.LikeCount}>{likes_count}</span>
      </div>
    </OverlayTrigger>
  )}
  <Link to={`/posts/${id}`} className={styles.CommentIcon}>
    <i className="far fa-comments" />
    <span className={styles.CommentCount}>{comments_count}</span>
  </Link>
</div>

      </Card.Body>
    </Card>
  );
};

export default Post;
