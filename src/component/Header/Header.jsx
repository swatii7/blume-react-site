import React, { useRef, useState } from 'react';
import logo from '../../assets/Logo/logo.svg';
import headerImg from '../../assets/ProductDetailImages/headerProductImage.png';
import ProductDetails from '../Products/ProductDetails';
import CustomButton from '../CustomButton/CustomButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from './SignUp/SignUpForm';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  const targetRef = useRef(null);

  const [modalShow, setModalShow] = useState(false);


  function handleBundleClick() {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function signupHandler(){
    console.log('clicked')
    setModalShow(true)

  }


  return (
    <>
      <div className='headerWrapper text-center bg-lightBlue textCapitalize'>
      <Navbar className="bg-body-tertiary bg-lightBlue">
  <Container style={{ marginRight: '221px'}} className='navContainer'>
    <Navbar.Brand>
      <div className='contentHeading Oswald'>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end navButton">
      <Navbar.Text>
        <div className="d-md-flex flex-column align-items-md-end">
          <div className="d-flex justify-content-md-between">
            <div className="mb-2 mb-md-0">
              <CustomButton
                label='Sign Up'
                className='signUpButton text-light customBtn bg-blue fw-700 Quicksand'
                onclick={signupHandler} />
            </div>
            <div className="mb-2 mb-md-0">
              <SignUpForm
                show={modalShow}
                onHide={() => setModalShow(false)} />
            </div>
          </div>
          <div className="mt-2 mt-md-0">
            {/* Other content for small screens */}
          </div>
        </div>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>


        
<Container>
  <Row className='flex-row flex-column-reverse-sm '>
    <Col lg={5} md={12} sm={12} xs={12}>
      <div className='mt-5 contentwrapper text-start'>
        <h3 className='fs-50 fw-500 contentPara Cooper'>
          Hopping on the PA system to say: welcome back to school!
        </h3>
        <p className='fs-20 fw-500 pt-2 headerPara Quicksand'>
          Attendence: Cloud9, Stargirl Airhug. Back to school szn looks
          different this year.
        </p>
        <CustomButton
          label='shop bundle'
          className='bunleBtn text-light customBtn bg-blue fw-700 mb-5 Quicksand'
          onclick={handleBundleClick}
        />
      </div>
    </Col>
    <Col lg={7} md={12} sm={12} xs={12}>
      <div className='headerImgWrapper'>
        <img
          src={headerImg}
          style={{
            width: '100%',
            paddingTop: '108px',
          }}
          alt='Header Image'
        />
      </div>
    </Col>
  </Row>
</Container>



      </div>
      <ProductDetails forwardRef={targetRef} />
    </>
  );
}

export default Header;
