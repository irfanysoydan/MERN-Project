import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="primary" className='py-4' expand="lg">
      <Container>
        <Navbar.Brand className='text-white'>Darkley</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white'>Anasayfa</Nav.Link>
            <Nav.Link className='text-white'>Duyurular</Nav.Link>
            <Nav.Link className='text-white'>Blog</Nav.Link>
            <Nav.Link className='text-white'>İletişim</Nav.Link>
            <NavDropdown title={<span className='text-white'> Hakkımızda</span>} id="basic-nav-dropdown" >
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant='outline-light'>
          <Link className="text-white text-decoration-none" to={"/login"}>Giris Yap</Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;