import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";

function NavBar(props) {
    const shadowClass = props.shadow ? "shadow" : "";

    return (
        <Navbar id="navbar" bg={props.background} expand="lg" fixed="top" className={`d-flex justify-content-between align-items-center sticky-top ${shadowClass}`}>
            <Navbar.Brand id="logo" className="fw-bold text-clear" href="#home">
                {props.logoText}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav id="nav" className="d-flex align-items-center text-white">
                    <Link to="/home" className="nav-link mx-3"><p className={props.page}>Home</p> </Link>
                    <Link to="/about" className="nav-link mx-3"><p className={props.page}>About Me</p> </Link>
                    <Link to="/projects" className="nav-link mx-3"><p className={props.page}>Projects</p></Link>
                    <a className="nav-link navIcon mx-3" href="https://github.com/QuintonPrice"><FaGithub className={props.page} /></a>
                    <a className="nav-link navIcon mx-3" href="https://www.linkedin.com/in/quinton-price/"><FaLinkedin className={props.page} /></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

