import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton} from "react-bootstrap";
import "../css/Main.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Main extends React.Component {
    render () {
        return (
            <Container fluid className="main p-4">
                {this.props.children}
            </Container>
        )
    }
}


const ExspencesBlock = () => {
    return (
        <Main>
            <ExspencesText/>
            <Exspences/>
        </Main>
    )
}

const IncomeBlock = () => {
    return (
        <Main>
            <IncomeText/>
            <Income/>
        </Main>
    )
}

class ExspencesText extends React.Component {
    render () {
        return (
            <>
                <Form.Label htmlFor="basic-url" className="mode-text">Введите свои Расходы</Form.Label>
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

const Exspences = () => {
    const emptyRow = {
        inputValue: 0,
        selectedOption: []
    }

    const [rows, setRows] = useState([emptyRow])

    const handleRowChange = (rowIndex, key, value) => {
        const rowData = {...rows[rowIndex]}
        const updatedRows = [...rows]
        
        rowData[key] = value
        updatedRows[rowIndex] = rowData
        setRows(updatedRows)
    }

    return (
        <>
            <div id="exspences-render">
                { rows.map(
                    (row, index) => (
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    <span className="input-text">&ndash;</span>
                                </InputGroup.Text>

                                <Form.Control 
                                    aria-label="Text input with selector button" 
                                    type="number" 
                                    value={row.inputValue} 
                                    onChange={({target}) => handleRowChange(index, 'inputValue', target.value)}
                                />

                                <Form.Select 
                                    aria-label="Floating label select example" 
                                    value={row.selectedOption}
                                    onChange={({target}) => handleRowChange(index, 'selectedOption', target.value)}
                                >
                                    <option selected>...</option>
                                    <option value="1">Личные</option>
                                    <option value="2">Необходимые</option>
                                    <option value="3">Дополнительные</option>
                                </Form.Select>

                                <InputGroup.Text id="basic-addon1">&#x20bd;</InputGroup.Text>
                            </InputGroup>
                        </Row>
                    )
                )
            }
            </div>

            <div className="exspences-add">
                <Button className="exspences-add-btn" onClick={() => setRows([...rows, emptyRow])}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                </Button>
            </div>
        </>
    )
}

const Income = () => {
    const emptyRow = {
        inputValue: 0,
        selectedOption: []
    }

    const [rows, setRows] = useState([emptyRow])

    const handleRowChange = (rowIndex, key, value) => {
        const rowData = {...rows[rowIndex]}
        const updatedRows = [...rows]
        
        rowData[key] = value
        updatedRows[rowIndex] = rowData
        setRows(updatedRows)
    }

    return (
        <>
            <div id="income-render">
                {rows.map(
                    (row, index) => (
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    <span className="input-text">+</span>
                                </InputGroup.Text>

                                <Form.Control 
                                    aria-label="Text input with selector button" 
                                    type="number"
                                    value={row.inputValue}
                                    onChange={
                                        ({target}) => handleRowChange(index, 'inputValue', target.value)
                                    }
                                />

                                <Form.Select 
                                    aria-label="Floating label select example"
                                    onChange={
                                        ({target}) => handleRowChange(index, 'selectedOption', target.value)
                                    }
                                    value={row.selectedOption}
                                >
                                    <option>...</option>
                                    <option value="1">Работа</option>
                                    <option value="2">Подработка</option>
                                    <option value="3">Дополнительные</option>
                                </Form.Select>
                                <InputGroup.Text id="basic-addon1">&#x20bd;</InputGroup.Text>
                            </InputGroup>
                        </Row>
                    )
                )
            }
            </div>

            <div className="income-add">
                <Button className="income-add-btn" onClick={() => setRows([...rows, emptyRow])}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                </Button>
            </div>
        </>
    )
}

export {ExspencesBlock, IncomeBlock}