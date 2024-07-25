import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import saving from '../../component/img/saving-img.png'
import '../../component/design/SeactionSaving.css'

const SeactionSaving = () => { 
    return (    
        <>
            <div className='py-5' >
                <Container style={{ backgroundColor: "#7fd7eb" }} className='rounded'  >
                    <Row>
                        <Col className="m-auto mt-5 col-sm-6 col-12 order-sm-1 order-2">
                            <Image className="mt-5 " src={saving} rounded fluid />
                        </Col>
                        <Col className='m-auto m-auto  col-sm-6 col-12 order-sm-2 order-1'>
                            <h1 className='fs-1 fw-bold mt-5 '>BEST SAVINGS ON NEW ARRIVALS</h1>
                            <p >Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet
                                blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.</p>
                            <div className="button-container py-3 d-flex flex-column flex-sm-row">
                                <Button  className="seactionsavingbtn1 btn-lg py-2 px-3 mb-3 mb-sm-0 me-sm-3 fw-semibold">Buy Now</Button>
                                <Button  className="seactionsavingbtn2 btn-lg py-2 px-3 fw-semibold">See More</Button>
                            </div> 
                            
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default SeactionSaving