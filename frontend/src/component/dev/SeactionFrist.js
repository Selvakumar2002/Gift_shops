import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import slider from "../../../src/component/img/slider-img.png"
import '../design/SeactionFrist.css';
import Button from 'react-bootstrap/Button';

const SeactionFrist = () => {    
    return (
        <>
            <div className='py-4'>
                <Container style={{ backgroundColor: '#FFC7ED', color: "" }} className='rounded'>

                    <Carousel >
                        <Carousel.Item>
                            <Row className=''>
                                <Col className='m-auto p-5 '>
                                    <h1 className='sectionfristh1  display-3  fw-bold ' >Welcome To Our   Gift Shop</h1>
                                    <p className=''>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                        maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                                    <Button  className=' seactionfirstbnt btn py-3 px-5 ps-5 pe-5'>CONTACT US</Button>{' '}

                                </Col>
                                <Col className=' mt-5 d-flex justify-content-center'>
                                    <Image className='pb-5' src={slider} rounded />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className=''>
                                <Col className='m-auto p-5 '>
                                    <h1 className='sectionfristh1  display-3 winth fw-bold ' >Welcome To Our   Gift Shop</h1>
                                    <p className=''>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                        maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                                    <Button  className='seactionfirstbnt btn py-3 px-5 ps-5 pe-5'>CONTACT US</Button>{' '}

                                </Col>
                                <Col className=' mt-5 d-flex justify-content-center'>
                                    <Image className='pb-5' src={slider} rounded />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className=''>
                                <Col className='m-auto p-5 '> 
                                    <h1 className='sectionfristh1  display-3 winth fw-bold ' >Welcome To Our   Gift Shop</h1>
                                    <p className=''>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                                        maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>
                                    <Button  className='seactionfirstbnt btn py-3 px-5 ps-5 pe-5'>CONTACT US</Button>{' '}

                                </Col>
                                <Col className=' mt-5 d-flex justify-content-center'>
                                    <Image className='pb-5' src={slider} rounded />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                </Container >
            </div >

        </>
    )
}

export default SeactionFrist