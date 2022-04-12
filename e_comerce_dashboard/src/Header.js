import React from 'react'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function Header() {
  const history=useNavigate();
  function logout() {
    localStorage.clear();
    history('/register')
  }
  let user =JSON.parse(localStorage.getItem('user-info'))
    return (
      <div>
          <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Scribble E-Commerce</Navbar.Brand>
    <Nav className="me-auto nav_warapper">
      {
        localStorage.getItem("user-info")?
        <>
      <Link to="/add">Add Products</Link>
      <Link to="/">Product List</Link>
      <Link to="/update">Update Products</Link>
      <Link to="/search">Search Products</Link>
        </>
        :
        <>
        <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
        </>
      }
      
      
    </Nav> 
    {localStorage.getItem("user-info")?
    <Nav>
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logout} > Logout</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    :null
}

  </Navbar>
      </div>
    );
  }
  
  export default Header;