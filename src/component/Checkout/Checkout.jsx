import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomInput from './CustomInput/CustomInput';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import poweredImg from '../../assets/Checkout/powered_by_stripe.png'
import {LockFill} from 'react-bootstrap-icons'
import CheckoutFooter from './CheckoutFooter/CheckoutFooter';


function Checkout({forwardRef}) {

  // const details = [
  //   first_name = 'First Name',

  // ]

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

    return (
        <div  ref={forwardRef} className='checkoutContainer'>
           <Container>
      <Row>
        <Col></Col>
        <Col xs={5}>
        <div className='checkoutWrapper'>
                <h2 className='checkoutHeading Cooper fs-50' >Secured Checkout</h2>
                <p className='Quicksand fs-18 fw-500'>Get your Back to School Bundle now!</p>
            </div>
            <div className='formHeader'>
  <h5 className='fw-700 Cooper fs-28 pt-1'>
    Customer:
  </h5>
  <p className='Cooper fs-28 px-2'>
    Who are we sending this to?
  </p>
</div>

    <div className='formWrapper'>
    <Container>
      <Row>
        <Col>
        <CustomInput lg= {6} sm= {6} xs= {6} type='text' name='First Name' placeholder='First Name' />
        </Col>
        <Col>
        <CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Last Name' type='text' />
        </Col>
      </Row>
      <CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Email Address' type='text' />
      <CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Phone Number(Optional)' type='number' />
      <div className='d-flex mb-40'>
        <input type='checkbox' style={{width: '17px', transform: 'scale(1.2)'}} />
        <p className='px-3 pt-3'>Keep me up to date on news and exclusive offers</p>
      </div>
      <div className='formHeader'>
  <h5 className='fw-700 Cooper fs-28 pt-1'>
    Shipping:
  </h5>
  <p className='Cooper fs-28 px-1'>
  Where are we sending this to?
  </p>
</div>
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Shipping Address' type='text' />
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Apartment, Suite, etc.(Optional)' type='text' />
<div className='d-flex' style={{ justifyContent: "space-between" }}>
<CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Town/City' type='text' />
<RegionDropdown
        country={country}
        name='none'
        value={region}
        onChange={(val) => selectRegion(val)}
        className= 'regionDropdown'
      />
      
</div>
<div className='d-flex' style={{ justifyContent: "space-between" }}>
<CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Post/Zip Code' type='text' />
      <CountryDropdown
        value={country}
        onChange={(val) => selectCountry(val)}
        className= 'countryDropdown'
      />

    </div>
    <div className='d-flex' style={{justifyContent: 'space-between'}}>
      <div className='formHeader'>
      <h5 className='fw-700 Cooper fs-28 pt-1'>
    Payment
  </h5>
  <p className='Cooper fs-28 px-2'>
  details
  </p>
      </div>
  <div>
    <img src= {poweredImg} className='checkoutPatch' />
  </div>
</div>
<div className='mb-10'>
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Card Number' />
</div>
<div className='formHeader'>
      <h5 className='fw-700 Cooper fs-28 pt-1'>
    Discount
  </h5>
  <p className='Cooper fs-28 px-2'>
  code
  </p>
      </div>
      <div className='d-flex'>
        <div className= 'discInput'>
        <CustomInput lg= {9} sm= {6} xs= {6} placeholder= 'Discount Code' />
        </div>
      
      <button className='discountBtn opacity'>Apply</button>
      </div>
   <div className='cartTable'>
    <div className='d-flex justify-content-between'>
      <p className='CardTableContent'>Back to School Bundle</p>
      <p>$44.00</p>
      
    </div>
    <hr style={{marginTop: '0px'}}></hr>
    <div className='d-flex justify-content-between'>
      <p className='CardTableContent opacity'>Shipping</p>
      <p className='opacity'>Free!</p>
      
    </div>
    <div className='d-flex justify-content-between'>
      <p className='CardTableContent'>Total</p>
      <p>$44.00</p>
    </div>
   </div>
   <button className='purchaseButton opacity d-flex'>
   <LockFill className='lockIcon' />
   <p className='fs-24 fw-bold Quicksand' style={{paddingLeft: '16px'}}>Complete Purchase</p>
   </button>
   <div className='fs-18 transPara Quicksand'>
   <p>All transactions are safe & secured by 2048 bit SSL encryption.</p>
   </div>
    </Container>
    </div>
        </Col>
        <Col>
       
        </Col>
      </Row>
    </Container>
    <CheckoutFooter />
        </div>
    )
}

export default Checkout
