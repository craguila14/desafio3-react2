import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'

function NavBar() {

    const setActiveClass = ({isActive}) => (isActive ? "active" : "notActive")

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
          <div>
            <img src={logo} alt="Logo" className='logo'/>
          </div>
          <div className='links'>
            <NavLink className={setActiveClass} to="/">
                Home
            </NavLink>
                {" - "}
            <NavLink className={setActiveClass} to="/pokemones">
                Pokemones
            </NavLink>
            </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;


