import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {   
    return (
        <>
            <div className='py-5'>
                <Container style={{ backgroundColor: "#343a40" }}>
                    <Row className='py-5'>
                        <div className='d-flex justify-content-center'>
                            <FaFacebookF color='white' className='fs-5 mx-2' />
                            <FaTwitter color='white ' className='fs-5 mx-2' />
                            <FaInstagram color='white' className='fs-5 mx-2' />
                            <TfiYoutube color='white' className='fs-5 mx-2' />
                        </div>
                    </Row>
                    <Row className='text-white '>
                        <Col sm={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                            <h5 className='py-3'>ABOUT US</h5>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                            <h5 className='py-2'>Newsletter</h5>
                            <input className='px-3 p-2' placeholder='Enter Your Email' />
                            <button style={{ backgroundColor: '#db5bb3' }} className='p-2 fw-semibold mt-3 text-white px-4'>SUBSCRIBE</button>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='mb-4 mb-lg-0'>
                            <h5 className='py-3'>NEED HELP</h5>
                            <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h5 className='py-3'>CONTACT US</h5>
                            <p className='fs-6'><FaLocationDot color='white' /> P.N.P Main Road Tiruppur</p>
                            <p className='fs-6'><IoCallSharp color='white' /> +91 1234567890</p>
                            <p className='fs-6'><IoIosMail color='white' /> demo@gmail.com</p>
                        </Col>
                    </Row>
                    <hr className=" border-light border-1 opacity-50  mx-2" />
                    <Container>
                        <p className=' d-flex justify-content-center text-white pb-3 fw-semibold'><BsCCircle className='mt-1' color='white' />  All Rights Reserved By Free Html Templates</p>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default Footer
