import React, { useContext } from 'react'
import styles from "../styles/NavBar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../App';


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext)
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
  <>
         <NavLink 
         className={styles.NavLink} 
         activeClassName={styles.Active} 
         to="/signin"><i 
         className="fa-solid fa-right-to-bracket"></i>
         Sign in
         </NavLink> 
         <NavLink 
         className={styles.NavLink} 
         activeClassName={styles.Active} 
         to="/signup"><i 
         className="fa-solid fa-user-plus"></i>
         Sign up
         </NavLink>  
  </>
  );

  return (
    <Navbar collapseOnSelect expand="md" fixed='top' className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand}>
            EdenHub
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
            exact
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/"><i className="fa-solid fa-house"></i>Home
            </NavLink>
           {currentUser? loggedInIcons: loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar