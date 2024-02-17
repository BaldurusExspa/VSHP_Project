import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header";
import MainContent from "./MainContent";

export default class App extends React.Component {
    render () {
        return (
            
            <>

                <Header />

                <MainContent />

            </>
            
        )
    }
}