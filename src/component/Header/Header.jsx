import React, { useRef } from 'react';
import logo from '../../assets/Logo/logo.svg';
import headerImg from '../../assets/ProductDetailImages/headerProductImage.png';
import ProductDetails from '../Products/ProductDetails';
import CustomButton from '../CustomButton/CustomButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  const targetRef = useRef(null);

  function handleBundleClick() {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <>
      <div className='headerWrapper textCapitalize'>
        <div className='contentHeading Oswald'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <Container>
          <Row>
            <Col lg={5} md={12} sm={12}>
              <div className='mt-5 contentwrapper'>
                <h3 className='fs-50 fw-500 contentPara Cooper'>
                  Hopping on the PA system to say: welcome back to school!
                </h3>
                <p className='fs-20 fw-500 pt-2 headerPara Quicksand'>
                  Attendence: Cloud9, Stargirl Airhug. Back to school szn looks
                  different this year.
                </p>
              </div>
              <div>
                <CustomButton
                  label='shop bundle'
                  className='bunleBtn fw-700 mb-5 Quicksand'
                  onclick={handleBundleClick}
                />
              </div>
            </Col>
            <Col lg={7} md={12} sm={12}>
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