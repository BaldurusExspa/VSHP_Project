import {Container, Row, Col, Button} from 'react-bootstrap';

function Header (){
    return(
        <Container className='header d-flex justify-content-center fixed-top'>
            <Row>
                <Col lg='auto'>

                </Col>
                <Col>
                    <Button className='accountBtn'></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;