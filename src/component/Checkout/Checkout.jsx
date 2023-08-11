import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomInput from './CustomInput/CustomInput';
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import poweredImg from '../../assets/Checkout/powered_by_stripe.png'
import {LockFill} from 'react-bootstrap-icons'
import CheckoutFooter from './CheckoutFooter/CheckoutFooter';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';


function Checkout({forwardRef}) {

  const [state, setState] = useState({
    first_name:'',
    last_name: '',
    email_address: '',
    mobile_number: '',
    shipping_address: '',
    appartment: '',
    city_name:'',
    zip_code: '',
    card_number: '',
    isDisabled: true,

  })

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  function buttonHandler(){
    console.log('Clicked')
   if(state.first_name ===''||
   state.last_name === ''||
   state.email_address === ''||
   state.shipping_address === ''||
   state.city_name ===''||
   state.zip_code === ''||
   state.card_number === ''){
    
    enqueueSnackbar('All fields are required', {variant: 'error'})
   }
   else{
    // state.isDisabled(false)
    console.log('abled')
   }
  }

  function inputHanlder(e){
    setState(e.target.value)
  }

    return (
      <SnackbarProvider>
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
        <CustomInput lg= {6} sm= {6} xs= {6} type='text' placeholder='First Name' value= {state.first_name} onchange={inputHanlder} />
        </Col>
        <Col>
        <CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Last Name' value= {state.last_name} type='text' onchange={inputHanlder} />
        </Col>
      </Row>
      <CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Email Address' type='text' value={state.email_address} onchange={inputHanlder} />
      <CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Phone Number(Optional)' type='number' onchange={inputHanlder} />
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
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Shipping Address' type='text' value={state.shipping_address} onchange={inputHanlder} />
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Apartment, Suite, etc.(Optional)' type='text' onchange={inputHanlder} />
<div className='d-flex' style={{ justifyContent: "space-between" }}>
<CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Town/City' type='text' value={state.city_name} onchange={inputHanlder} />
<RegionDropdown
        country={country}
        name='none'
        value={region}
        onChange={(val) => selectRegion(val)}
        className= 'regionDropdown'
      />
      
</div>
<div className='d-flex' style={{ justifyContent: "space-between" }}>
<CustomInput lg= {6} sm= {6} xs= {6} placeholder= 'Post/Zip Code' type='text' onchange={inputHanlder} />
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
<CustomInput lg= {12} sm= {6} xs= {6} placeholder= 'Card Number' onchange={inputHanlder} />
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
        <CustomInput lg= {9} sm= {6} xs= {6} placeholder= 'Discount Code' onchange={inputHanlder} />
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
   {/* {state.isDisabled === true?<button className='purchaseButton d-flex' onClick={buttonHandler} disabled={true} >
   <LockFill className='lockIcon' />
   <p className='fs-24 fw-bold Quicksand' style={{paddingLeft: '16px'}}>Complete Purchase</p>
   </button>: */}
   <button className='purchaseButton d-flex' onClick={buttonHandler}>
   <LockFill className='lockIcon' />
   <p className='fs-24 fw-bold Quicksand' style={{paddingLeft: '16px'}}>Complete Purchase</p>
   </button>
   {/* } */}
   
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
        </SnackbarProvider>
    )
}

export default Checkout
