import React from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton} from "react-bootstrap";
import "../css/Main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Main extends React.Component {
    render () {
        return (
            <Container fluid className="main p-4">
                <div id="mode-text">
                    <ExspencesText />
                </div>
                <div id="content" className="pe-2">
                    <Exspences />
                </div>
            </Container>
        )
    }
}

class ExspencesText extends React.Component {
    render () {
        return (
            <>
                <Form.Label htmlFor="basic-url" className="mode-text">Введите свои расходы</Form.Label>
            </>
        )
    } 
}

class IncomeText extends React.Component {
    render () {
        return (
            <>
                <Form.Label htmlFor="basic-url" className="mode-text">Введите свои Доходы</Form.Label>
            </>
        )
    } 
}

class Exspences extends React.Component {
    render () {
        return (
            <>
                <div id="exspences-render">
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <span className="input-text">&ndash;</span>
                            </InputGroup.Text>
                            <Form.Control aria-label="Text input with selector button" type="number"/>
                            <Form.Select aria-label="Floating label select example">
                              <option selected>...</option>
                              <option value="1">Личные</option>
                              <option value="2">Необходимые</option>
                              <option value="3">Дополнительные</option>
                            </Form.Select>
                            <InputGroup.Text id="basic-addon1">&#x20bd;</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </div>

                <div className="exspences-add">
                    <Button className="exspences-add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </Button>
                </div>
            </>
        )
    }
}

class Income extends React.Component {
    render () {
        return (
            <>
                <div id="income-render">
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <span className="input-text">+</span>
                            </InputGroup.Text>
                            <Form.Control aria-label="Text input with selector button" type="number"/>
                            <Form.Select aria-label="Floating label select example">
                              <option>...</option>
                              <option value="1">Работа</option>
                              <option value="2">Подработка</option>
                              <option value="3">Дополнительные</option>
                            </Form.Select>
                            <InputGroup.Text id="basic-addon1">&#x20bd;</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </div>

                <div className="income-add">
                    <Button className="income-add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </Button>
                </div>
            </>
        )
    }
}