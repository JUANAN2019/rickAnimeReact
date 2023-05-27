import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavCompleto.css';

function NavCompletoS() {
  return (
    <div id="navCom">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fluidcontent'>
      <div className='logo'>
          <img className="logo" src="/logo.png" height="70px" alt="RickandMortyReact" href="/Inicio" />
      </div>
      <Container className='fluid'>
        <Navbar.Brand href="/Inicio">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Rick and Morty">Rick and Morty</Nav.Link>
            <Nav.Link href="/animes">Animes</Nav.Link>
            </Nav>
           <Nav>
             <Nav.Link  href="/suscriptores">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavCompletoS;
