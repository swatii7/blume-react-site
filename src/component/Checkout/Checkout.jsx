import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomInput from './CustomInput/CustomInput';

function Checkout() {
    return (
        <div className='checkoutContainer'>
            <div className='checkoutWrapper'>
                <h2 className='checkoutHeading Cooper fs-50' >Secured Checkout</h2>
                <p className='Quicksand fs-18 fw-500'>Get your Back to School Bundle now!</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
  <h5 className='fw-700 Cooper fs-24'>
    Customer :
  </h5>
  <p className='Cooper fs-24 px-2'>
    Who are we sending this to?
  </p>
</div>
{/* <Container>
      <Row>
        <Col></Col>
        <Col xs={6} lg={4}>
            <CustomInput lg= {2} />
            <CustomInput lg= {2} />
        </Col>
        <Col></Col>
      </Row>
     
    </Container> */}
    <div>
    <Container>
      <Row>
        <Col>
        <CustomInput />
        </Col>
        <Col>
        <CustomInput />
        </Col>
      </Row>
     
    </Container>
    </div>
        </div>
    )
}

export default Checkout
