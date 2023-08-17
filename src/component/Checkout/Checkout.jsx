import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomInput from './CustomInput/CustomInput';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import poweredImg from '../../assets/Checkout/powered_by_stripe.png'
import { LockFill } from 'react-bootstrap-icons'
import CheckoutFooter from './CheckoutFooter/CheckoutFooter';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';


function Checkout({ forwardRef }) {

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    // email_address: '',
    mobile_number: '',
    shipping_address: '',
    apartment: '',
    city_name: '',
    zip_code: '',
    card_number: '',
    checked: true

  })
  const [isDisabled, setIsDisabled] = useState(true)
  const [email, setEmail] = useState('')
  const [discount, setDiscount] = useState('')
  const [emailError, setEmailError] = useState('')
  const [discError, setDiscError] = useState('')
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const validateEmail = (input) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(input);
  };
  const validateCode = (input) => {
    const disc_regex = /^\d{7}([A]|[0-9]){1}\d{3}/;
    return disc_regex.test(input)
  };


  function handleEmailChange(e) {
    const emailInput = e.target.value
    setEmail(emailInput)
    if (!validateEmail(emailInput)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }


  function checkboxHandler() {
    setState((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
    }));
  }

  function discountChangeHandler(e) {
    const discInput = e.target.value
    setDiscount(discInput)
    if (validateCode ) {
      setDiscError('Enter 6 digit code')
    }
    else {
      setDiscError('')
    }
  }

  function codeHandler() {
    
    if(discount.length === 6){
      setDiscError('')
      setDiscount('')
      enqueueSnackbar('Coupeon applied successfully', {variant: 'success'})
    }
  }

  function inputHanlder(e, fieldName) {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
      isDisabled: false
    }));
  }



  function buttonHandler() {
    if (state.shipping_address === '' ||
      state.city_name === '' ||
      state.zip_code === '' ||
      state.card_number === ''
    ) {
      enqueueSnackbar('All fields are required', { variant: 'error' })
    }
    else {
      enqueueSnackbar('Order Placed Successfully', { variant: 'success' })
      setCountry('')
      setRegion('')
      setState({
        first_name: '',
        last_name: '',
        email_address: '',
        mobile_number: '',
        shipping_address: '',
        apartment: '',
        city_name: '',
        zip_code: '',
        card_number: '',
        checked: true,
        discount: ''
      })
    }
  }

  return (
    <SnackbarProvider>
      <div ref={forwardRef} className='checkoutContainer'>
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
                      <CustomInput
                        className='mb-3'
                        lg={6} sm={6} xs={6}
                        type='text'
                        placeholder='First Name'
                        value={state.first_name}
                        onchange={(e) => inputHanlder(e, 'first_name')} />
                    </Col>
                    <Col>
                      <CustomInput
                        className='mb-3'
                        lg={6} sm={6} xs={6}
                        placeholder='Last Name'
                        value={state.last_name}
                        type='text'
                        onchange={(e) => inputHanlder(e, 'last_name')} />
                    </Col>
                  </Row>

                  <CustomInput
                    lg={12} sm={6} xs={6}
                    className={`mb-3 ${emailError ? 'emailValidate' : ''}`}
                    placeholder='Email Address'
                    type='text'
                    error={emailError}
                    value={email}
                    onchange={handleEmailChange} />
                  {emailError && <p className='emailError'>{emailError}</p>}
                  <CustomInput
                    className='mb-3'
                    lg={12} sm={6} xs={6}
                    placeholder='Phone Number(Optional)'
                    type='number'
                    onchange={(e) => inputHanlder(e, 'mobile_number')} />
                  <div className='d-flex mb-40'>
                    <input type='checkbox' style={{ width: '17px', transform: 'scale(1.2)' }} value={state.checked} checked={true} onChange={checkboxHandler} />
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
                  <CustomInput
                    className='mb-3'
                    lg={12} sm={6} xs={6}
                    placeholder='Shipping Address'
                    type='text'
                    value={state.shipping_address}
                    onchange={(e) => inputHanlder(e, 'shipping_address')} />
                  <CustomInput
                    className='mb-3'
                    lg={12} sm={6} xs={6}
                    placeholder='Apartment, Suite, etc.(Optional)'
                    type='text'
                    value={state.apartment}
                    onchange={(e) => inputHanlder(e, 'apartment')} />
                  <div className='d-flex' style={{ justifyContent: "space-between" }}>
                    <CustomInput
                      className='mb-3'
                      lg={6} sm={6} xs={6}
                      placeholder='Town/City'
                      type='text'
                      value={state.city_name}
                      onchange={(e) => inputHanlder(e, 'city_name')} />
                    <RegionDropdown
                      country={country}
                      name='none'
                      value={region}
                      onChange={(val) => selectRegion(val)}
                      className='regionDropdown'
                    />

                  </div>
                  <div className='d-flex' style={{ justifyContent: "space-between" }}>
                    <CustomInput
                      className='mb-3' l
                      g={6} sm={6} xs={6}
                      placeholder='Post/Zip Code'
                      type='text'
                      value={state.zip_code}
                      onchange={(e) => inputHanlder(e, 'zip_code')} />
                    <CountryDropdown
                      value={country}
                      onChange={(val) => selectCountry(val)}
                      className='countryDropdown'
                    />

                  </div>
                  <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                    <div className='formHeader'>
                      <h5 className='fw-700 Cooper fs-28 pt-1'>
                        Payment
                      </h5>
                      <p className='Cooper fs-28 px-2'>
                        details
                      </p>
                    </div>
                    <div>
                      <img src={poweredImg} className='checkoutPatch' />
                    </div>
                  </div>
                  <div className='mb-10'>
                    <CustomInput
                      className='mb-3'
                      lg={12} sm={6} xs={6}
                      placeholder='Card Number'
                      type='number'
                      onchange={(e) => inputHanlder(e, 'card_number')} />
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
                    <div className='discInput'>
                      <CustomInput
                        className={`mb-3 ${discError ? '' : ''}`}
                        lg={9} sm={6} xs={6}
                        placeholder='Discount Code'
                        value={discount}
                        error={discError}
                        type= 'number'
                        onchange={discountChangeHandler} />
                      {discError && <p className='discError'>{discError}</p>}
                    </div>
                    {discount === '' ? <button className='discountBtn opacity' onClick={codeHandler} disabled={isDisabled}>Apply</button> :
                      <button className='discountBtn' onClick={codeHandler}>Apply</button>}

                  </div>
                  <div className='cartTable'>
                    <div className='d-flex justify-content-between'>
                      <p className='CardTableContent'>Back to School Bundle</p>
                      <p>$44.00</p>

                    </div>
                    <hr style={{ marginTop: '0px' }}></hr>
                    <div className='d-flex justify-content-between'>
                      <p className='CardTableContent opacity'>Shipping</p>
                      <p className='opacity'>Free!</p>

                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='CardTableContent'>Total</p>
                      <p>$44.00</p>
                    </div>
                  </div>
                  {/* {console.log(state.isDisabled)} */}
                  {state.first_name !== '' && state.last_name !== '' && state.email_address !== '' ?
                    <button
                      className="purchaseButton d-flex "
                      onClick={buttonHandler}
                      disabled={isDisabled}
                    >
                      <LockFill className='lockIcon' />
                      <p className='fs-24 fw-bold Quicksand' style={{ paddingLeft: '16px' }}>
                        Complete Purchase
                      </p>
                    </button> :
                    <button
                      className="purchaseButton d-flex disabledButton "
                      onClick={buttonHandler}
                      disabled={isDisabled}
                    >
                      <LockFill className='lockIcon' />
                      <p className='fs-24 fw-bold Quicksand' style={{ paddingLeft: '16px' }}>
                        Complete Purchase
                      </p>
                    </button>
                  }

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
