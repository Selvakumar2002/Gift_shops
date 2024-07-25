import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/Image';
import gift from '../../component/img/gifts.png';
import Button from 'react-bootstrap/Button';
import '../../component/design/SeactionGift.css'


const SeactionGift = () => {
    return (
        <>   
            <div>
                <Container className='rounded' style={{ backgroundColor: '#6929a5' }}>
                    <Row>
                        <Col className='m-auto mt-5 col-sm-6 col-12 '>
                            <Image className=" px-5" src={gift} rounded fluid />
                        </Col>
                        <Col className='m-auto m-auto  col-sm-6 col-12 text-white '>
                            <h1 className='fs-1 fw-bold mt-5 '>GIFTS FOR YOUR LOVED ONES</h1>
                            <p >Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis,
                                 vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?</p>
                            <div className="button-container py-3 d-flex flex-column flex-sm-row">
                                <Button className="seactiongiftbtn1 btn-lg py-2 px-4 mb-3 mb-sm-0 me-sm-3 fw-semibold">Buy Now</Button>
                                <Button className="seactiongiftbtn2 btn-lg py-2 px-4 fw-semibold">See More</Button>
                            </div>

                        </Col>
                    </Row>

                </Container>

            </div>


        </>
    )
}

export default SeactionGift