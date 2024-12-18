import React from 'react';
import styles from "../styles/NavBar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import logo from "../assets/edenhub_logo.jpeg";
import useClickOutsidetoggle from '../hooks/useClickOutsidetoggle';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsidetoggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
      <i className="fa-solid fa-plus-square"></i>
      Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
        <i className="fa-solid fa-stream"></i>
        Feed
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
        <i className="fa-solid fa-heart"></i>
        Liked
      </NavLink>
      
      {/* bookmark icon */}
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/bookmarks">
        <i class="fa-solid fa-bookmark"></i>
        Bookmarks
      </NavLink>

      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fa-solid fa-sign-out-alt"></i>
        Sign out
      </NavLink>
      <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar src={currentUser?.profile_image} text={currentUser?.username}  height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
        <i className="fa-solid fa-right-to-bracket"></i>
        Sign in
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
        <i className="fa-solid fa-user-plus"></i>
        Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} collapseOnSelect expand="md" fixed='top' className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand}>
            <img src={logo} alt="logo" className={styles.Logo} />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/">
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
