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
        <NavDropdown.Item as={Link} to="/proyectCar/public/brandss">Brand List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/brand">Add Brand</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Cars" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/cars">Car List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/car">Add</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="LaborData" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/laborDatas">Labor Data List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/laborData">Add</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Customers" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/customers">Customer List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/customer">Add</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Sellers" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/sellers">Seller List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/seller">Add</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/categories">Category List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/proyectCar/public/category">Add</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="Sales" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/proyectCar/public/sales">Sales List</NavDropdown.Item> 
        <NavDropdown.Item as={Link} to="/proyectCar/public/sale">Add</NavDropdown.Item>
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



