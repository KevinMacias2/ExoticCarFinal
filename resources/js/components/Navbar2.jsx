import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
    <Navbar.Brand as={Link} to="/proyectCar/public/">Home</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    

    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">

    <NavDropdown title="Brands" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="Cars" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="LaborData" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="Customers" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="Sellers" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="Categories" id="collasible-nav-dropdown">
    </NavDropdown>

    <NavDropdown title="Sales" id="collasible-nav-dropdown">
    </NavDropdown>

</Nav>
<Nav>

<Nav.Link>
<img
          alt=""
          src="img/logo.png"
          width="370"
          height="90"
          className="d-inline-block align-top"
        />
</Nav.Link>

</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    <section>
      <Outlet></Outlet>
    </section>
    </>
    
  );
}

export default NavBar;
