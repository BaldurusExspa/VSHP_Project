import React, {useState} from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import "../css/LeftBar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";


export default class LeftBar extends React.Component {
    render () {
        return (
            <Container fluid className="leftbar p-0">
                <Row className="pt-4">
                    <Col className="px-0">
                        <Button className="leftbar-btn d-flex justify-content-center align-items-center" id='exspences-btn' as={Link} to={'/exspences/'}>
                            <span>Расходы</span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="px-0">
                        <Button className="leftbar-btn d-flex justify-content-center align-items-center" id='income-btn' as={Link} to={'/income/'}>
                            <span>Доходы</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    } 
}