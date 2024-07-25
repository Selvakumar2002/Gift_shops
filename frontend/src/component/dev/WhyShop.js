import React from 'react'
// import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import delivery from '../img/delivery.jpg'
import shiping from '../img/shiping.png'
import best from '../img/best.jpg'
const WhyShop = () => {

  return (
    <>
      <div className='py-5'>
    

        <Container>
          <Row>  <h2 className='text-center fw-bold '>WHY SHOP WITH US</h2>  </Row>
          <Row>

            <div className='col-12 col-sm-6 col-md-4 my-3'>
              <div className='card' >
                <div className='text-center'>

                  <img src={delivery} className='img-fluid rounded  whyusimg1  text-center ' alt='' width={'50%'} />
                </div>
                <div className='card-body'>
                  <h3 className=' fw-bold text-center'> Free Shiping</h3>
                  <p className='fs-5 text-center'>variations of passages of Lorem Ipsum available</p>

                </div>

              </div>

            </div>

            <div className='col-12 col-sm-6 col-md-4 my-3'>
              <div className='card'>
                <div className='text-center'>

                  <img src={shiping} className='img-fluid rounded  whyusimg1  text-center '  alt='' width={'50%'} />
                </div>
                <div className='card-body'>
                  <h3 className=' fw-bold text-center'> Best  Quality</h3>
                  <p className='fs-5 text-center' >variations of passages of Lorem Ipsum available</p>

                </div>

              </div>

            </div>

            <div className='col-12 col-sm-6 col-md-4 my-3'>
              <div className='card'>
                <div className='text-center'>

                  <img src={best} className='img-fluid rounded  whyusimg1  text-center ' alt='' width={'50%'} />
                </div>
                <div className='card-body'>
                  <h3 className=' fw-bold text-center'> Fast Delivery</h3>
                  <p className='fs-5 text-center'>variations of passages of Lorem Ipsum available</p>

                </div>

              </div>

            </div>
          </Row>
        </Container>
      </div>


    </>
  )
}

export default WhyShop