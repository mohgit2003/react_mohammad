
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './login';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout';

function He() {
  let {isAuthenticated,user}=useAuth0()
  console.log(user)
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Food Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/theMenu">browse</Nav.Link>
            {isAuthenticated && <Nav.Link href="/favorit">Favorites</Nav.Link>}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        {isAuthenticated?
        <>
         <LogoutButton/>
         <img src={user.picture} style={{width:"50px", height:"50px", margin:"0 10px 0 10px"}}></img>
         <h3>{user.name}</h3>
         </>:
         <LoginButton/> }
      </Container>
    </Navbar>
   
  );
}

export default He;