import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../design/Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { fakeAuth } from '../../adminpanel/Login';



function Header() {


  const cartitems = useSelector(state => state.cart.cartitems);
   
  
  
  return (
    <>
      <Navbar className='sticky-top' expand="lg"  style={{backgroundColor:'#E6E6FA'}}>
        <Container className=''>
          <Navbar.Brand as={Link} to='/'  className='nav display-1  fw-bold fs-2' >GIFTOS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center">
              <Nav.Link as={Link} to='/'  className='fw-semibold'>HOME</Nav.Link>
              <Nav.Link as={Link} to='/products'  className='fw-semibold'>PRODUCTS</Nav.Link>
              <Nav.Link as={Link} to='/whyus'   className='fw-semibold'>WHY US</Nav.Link>
              <Nav.Link as={Link} to='/testimonial'   className='fw-semibold'>TESTIMOIAL</Nav.Link>
              <Nav.Link as={Link} to='/contactus'   className='fw-semibold'>CONTACT US</Nav.Link>
              <Nav.Link as={Link} to='/cart'className='fw-semibold'>CART
                <span className='bg-light px-2 ms-2 rounded-2'>{cartitems.length}</span>
              </Nav.Link>
            </Nav>
            <Nav className=" ms-auto d-flex justify-content-end">
            <Nav.Link as={Link} to='/adminform' className='fw-bolder'>ADMIN</Nav.Link>

            {/* {  ( */}
                <>
                  <Nav.Link className='fw-bolder text-primary bg-white' >LOGOUT</Nav.Link>
                </>
              {/* ) : ( */}
                <Nav.Link className='fw-bolder' as={Link} to='/login'>LOGIN</Nav.Link>
              {/* )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;



