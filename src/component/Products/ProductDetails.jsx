import React from 'react'
import stargirlImg from '../../assets/ProductDetailImages/stargirl.png'
import cloud9Img from '../../assets/ProductDetailImages/cloud9.png'
import airhugImg from '../../assets/ProductDetailImages/airHug.png'
import CustomButton from '../CustomButton/CustomButton';
import Checkout from '../Checkout/Checkout';
import ProductReview from '../Products/ProductReview';
import Footer from '../Footer/Footer';

function ProductDetails({forwardRef}) {

    const products = [
        {
          name: 'Stargirl',
          description: 'Facial Toner Mist to keep skin clear and fresh all day',
          image: stargirlImg,
        },
        {
          name: 'Cloud 9',
          description: 'Essential Oil Roll-On that soothes PMS pains',
          image: cloud9Img,
        },
        {
          name: 'Air Hug',
          description: 'Hydrating Hand Sanitizer made with aloe',
          image: airhugImg,
        },
      ];

    return (
      <>
        <div ref={forwardRef} className='productDetailWrapper Cooper'>
            <div className='productDetailHeading'>
                <h2 className='fs-50'>Back to School Bundle</h2>
                <p className='fs-20 fw-500' style={{letterSpacing: '0.05rem', paddingBottom: 0, marginBottom: 0}}>Stargirl, Cloud 9, and Air Hug</p>
                <p className='fs-20 fw-500 detailPrice'>$56</p>
                <p className='fs-20 fw-500'>$44</p>
            </div>
            <div className='productContainer'>
      {products.map((product, index) => (
        <div key={index} className='productCard'>
          <img src={product.image} alt={product.name} className='productImage' />
          <div>
            <h3 className='fs-40'>{product.name}</h3>
            <p className='fs-20 mx-4 px-5 productdesc Quicksand' >{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='productBtnContainer'>
        <CustomButton label= 'Take me 2 Checkout!' className='productButton Quicksand fw-700 mb-5' />
    </div>
        </div>
        <ProductReview />
        <Checkout />
        <Footer/>
        </>
    )
}

export default ProductDetails
