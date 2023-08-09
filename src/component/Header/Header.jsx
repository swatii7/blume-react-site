import React, { useRef } from 'react';
import logo from '/src/assets/logo.svg';
import ProductDetails from '../Products/ProductDetails';
import CustomButton from '../CustomButton/CustomButton';

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
        <div className='mt-5 pt-5 contentwrapper mx-5 px-5'>
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
      </div>
      <ProductDetails forwardRef={targetRef} /> {/* Pass ref as prop */}
    </>
  );
}

export default Header;
