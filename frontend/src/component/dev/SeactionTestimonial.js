import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import vector from '../../component/img/vector.jpg';

const SectionTestimonial = () => {
    return (
        <div className=''>  
            <Container>
                <Row>
                    <h2 className='fw-bold py-3                                                                                                                                                                                                                                                                                                                 '>TESTIMONIAL</h2>
                </Row>
                <Carousel className='' >
                    <Carousel.Item style={{height:'550px'}} >
                    <Image src={vector} width={'100%'} height={'600px'} />

                        <Carousel.Caption className='py-4  ' style={{color:"#FF0000"}}>
                            <h3 className=''>Rochak</h3>
                            <p>Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                                uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'550px'}} >
                        <Image src={vector} width={'100%'}  height={'600px'} />

                        <Carousel.Caption className='py-4'  style={{color:"#FF0000"}}>
                            <h3>Brad Johns</h3>
                            <p>Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'550px'}}>
                        <Image src={vector} width={'100%'} height={'600px'} />

                        <Carousel.Caption className='py-4'  style={{color:"#FF0000"}}>
                            <h3>Morijorch</h3>
                            <p>
                            Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various editors now use Lorem Ipsum as their default
                                model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default SectionTestimonial;
