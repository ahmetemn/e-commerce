import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const ProductLinkCard = () => {
    return (


        <Container className='mt-3'>
            <Row >



                <Col sm className='container d-flex justify-content-center mt-1'>
                    <Card>
                        <Card.Img variant="top" src="https://i.hizliresim.com/lxgojrs.jpg" />

                    </Card>
                </Col>

                <Col sm className='container d-flex justify-content-center mt-1'>
                    <Card>
                        <Card.Img variant="top" src="https://i.hizliresim.com/1gyi7l9.png" />

                    </Card>
                </Col>

                <Col sm className='container d-flex justify-content-center mt-1'>
                    <Card>
                        <Card.Img variant="top" src="https://i.hizliresim.com/ad60u5l.png" />

                    </Card>
                </Col>





            </Row>
        </Container>

    )
}

export default ProductLinkCard