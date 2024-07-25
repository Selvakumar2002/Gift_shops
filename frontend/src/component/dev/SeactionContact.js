import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import '../design/SeactionContact.css'
const SeactionContact = () => {
  return (
    <>
      <div className='py-5'>
        <Container style={{backgroundColor:"#FFF0F5"}}> 
          <Row><h2 className='fw-bold py-3'>CONTACT US</h2></Row>   
          <Row>
            <Col className=' py-2'  sm={12} md={6}>
              <iframe 
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.4700455182574!2d77.33861061219004!3d11.108618847897803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907ab4f04f5a1%3A0x8dee8d752972726b!2sTiruppur%20Railway%20Station!5e0!3m2!1sen!2sin!4v1720721988495!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col>
              <div className="my-3">
                  <input type="text" className="form-control py-3 " placeholder="Name" aria-label="Name " />
                  <input type="text" className="form-control  py-3 my-3" placeholder="Email" aria-label="Email " />
                  <input type="text" className="form-control py-3 my-3" placeholder="Phone" aria-label="Phone " />
                  <input type="text" className="form-control py-5 my-3" placeholder="Message" aria-label="Message " />
                  <div className='mt-4 d-flex justify-content-center'>

                  <button className=" py-2 contactbtn fw-bolder "  >SEND</button>
                  </div>
              </div>

            </Col>
          </Row>
        </Container>

      </div>

    </>
  )
}

export default SeactionContact