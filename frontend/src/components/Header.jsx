import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaInfinity} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="logoName"><FaInfinity size={50} color="#266ef6"/> INFINITY <br /></Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/login">
                            <Nav.Link><FaUser size={28}/> Sign In</Nav.Link>
                        </LinkContainer> 
                        &nbsp;
                        <LinkContainer to="/cart">
                            <Nav.Link><FaShoppingCart size={30} /> Cart</Nav.Link>
                        </LinkContainer>        
                    </Nav>
                </Navbar.Collapse>   
            </Container>
        </Navbar>
    </header>
  )
}

export default Header