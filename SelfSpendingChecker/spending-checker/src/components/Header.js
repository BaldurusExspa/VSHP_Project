import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/Header.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <Container fluid>
                    <Row className="header-row d-flex justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center align-items-center"></Col>
                        <Col className="d-flex justify-content-end align-items-center pe-3">
                            <Button className="header-btn d-flex justify-content-center align-items-center"></Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}