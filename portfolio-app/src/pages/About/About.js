import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../../components/Navbar/Navbar';
import '../../App.css'; // main css file //may need to change path
import './about.css'; // about css file
import resume from '../../downloads/Resume.pdf';
import { AboutData } from './AboutData.js';

class About extends Component {

    submitAlert = () => {
        alert("Form submitted!");
    }

    render() {

        return (
            <div className="about-div">
                <NavBar background="white" logoText='qprice' shadow="t" page="about" />
                <h1 id="header-about" className="font-weight-bold text-uppercase text-center ">About Me</h1>
                <Container id="blurb" fluid className="border shadow bg-white">
                    <Row id="blurbRow" className='justify-content-center align-items-center'>
                        <Col id="aboutBlurb" xs={12} md={8} lg={9}>
                            <h1 id="about-hi" className="about-text font-weight-bold">Hi,</h1>
                            <br />
                            {AboutData.map((item) => {
                                return (
                                    <p className="about-text" dangerouslySetInnerHTML={{ __html: item["content"] }}></p>
                                )
                            })}
                        </Col>
                        <Col>
                            <img id="picture" className="shadow rounded" alt="author" src="https://i.imgur.com/pYAb7eH.png"></img>
                        </Col>
                    </Row>
                </Container>

                <Container id="contact" fluid className="rounded border shadow">
                    <h2>Contact me!</h2>
                    <Form name="contact-form" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact-form" />
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" autoComplete="name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" rows="4" placeholder="Enter your message" />
                        </Form.Group>
                        <Button id="submitButton" variant="primary" type="submit" onClick={this.submitAlert}>Submit</Button>
                    </Form>
                </Container>

                <a id="download-resume" href={resume} className="btn rounded border shadow" download="Quinton Price Resume"> Download My Resume </a>
            </div>
        )
    }
}

export default About;
