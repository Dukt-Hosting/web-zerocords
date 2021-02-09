import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function NavBar(props) {
  return (
    <Navbar expand="lg" width="full">
      <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/commands">Commands</Nav.Link>
        </Nav>
        <Button variant="outline-primary" href="/dashboard">Dashboard</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}