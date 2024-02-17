import React, {useState} from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Main from "./Main";
import LeftBar from "./LeftBar";

export default class MainContent extends React.Component {

    render () {
        return (
            <Container fluid className="p-0 main-content">
                    <Row>
                        <Col lg={2} xl={2} xxl={2} className="px-0">
                            <LeftBar />
                        </Col>

                        <Col lg={10} xl={10} xxl={10} className="px-0">
                            <Main />
                        </Col>
                    </Row>
                </Container>
        )
    }
}

//     constructor(props) {
//         super(props);
//         this.addActiveClass= this.addActiveClass.bind(this);
//         this.state = {
//             active: false,
//         };
//     }
//     toggleClass() {
//         const currentState = this.state.active;
//         this.setState({ active: !currentState });
//     };

//     render() {
//         return (
//             <div 
//                 className={this.state.active ? 'your_className': null} 
//                 onClick={this.toggleClass} 
//             >
//                 <p>{this.props.text}</p>
//             </div>
//         )
//   }