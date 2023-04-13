import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";

function NavBar(props) {
    const shadowClass = props.shadow ? 'shadow' : '';
    
    const textColor = () => {
        if (shadowClass) {
            return "text-white";
        } else {
            return "text-dark";
        }
    }

    return (
        <Navbar id="navbar" bg={props.background} expand="lg" fixed="top" className={`d-flex justify-content-between align-items-center sticky-top ${shadowClass}`}>
            <Navbar.Brand id="logo" className="fw-bold text-clear" href="#home">
                {props.logoText}
            </Navbar.Brand>
            <Nav id="nav" className="d-flex justify-content-end align-items-center text-white">
                <Link to="/home" className="nav-link mx-3"><p className={props.page}>Home</p></Link>
                <Link to="/about" className="nav-link mx-3"><p className={props.page}>About Me</p></Link>
                <Link to="/projects" className="nav-link mx-3"><p className={props.page}>Projects</p></Link>
                <a className="nav-link navIcon mx-3" href="https://github.com/QuintonPrice"><FaGithub className={props.page}/></a>
                <a className="nav-link navIcon mx-3" href="https://www.linkedin.com/in/quinton-price/"><FaLinkedin  className={props.page}/></a>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
