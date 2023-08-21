import React, { useRef } from 'react'
import stargirlImg from '../../assets/ProductDetailImages/stargirl.png'
import cloud9Img from '../../assets/ProductDetailImages/cloud9.png'
import airhugImg from '../../assets/ProductDetailImages/airHug.png'
import CustomButton from '../CustomButton/CustomButton';
import Checkout from '../Checkout/Checkout';
import ProductReview from '../Products/ProductReview';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

      const targetRef = useRef(null)

      function handleCheckout(){
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      
      }

    return (
      <>
        <div ref={forwardRef} className='productDetailWrapper text-center Cooper'>
            <div className='productDetailHeading'>
                <h2 className='fs-50 sm-fs-30'>Back to School Bundle</h2>
                <p className='fs-20 fw-500 sm-fs-18' style={{letterSpacing: '0.05rem', paddingBottom: 0, marginBottom: 0}}>Stargirl, Cloud 9, and Air Hug</p>
                <p className='fs-20 fw-500 detailPrice'>$56</p>
                <p className='fs-20 fw-500'>$44</p>
            </div>
    <Container className='productContainer mx-auto px-auto'>
    <Row>
    {products.map((product, index) => (
     
        <Col key={index} lg={4} md={4} xs={12}>
        <div className='productCard'>
          <img src={product.image} alt={product.name} className='productImage' />
          <div>
            <h3 className='fs-40 sm-fs-24'>{product.name}</h3>
            <p className='fs-20 mx-4 px-5 productdesc Quicksand sm-fs-14' >{product.description}</p>
          </div>
        </div>
        </Col>
       ))}
        </Row>
    </Container>
    <div className='productBtnContainer'>
        <CustomButton label= 'Take me 2 Checkout!' className='productButton  text-light bg-blue customBtn Quicksand fw-700 mb-5 mt-5' onclick={handleCheckout} />
    </div>
        </div>
        <ProductReview />
        <Checkout forwardRef={targetRef}  />
        <Footer/>
        </>
    )
}

export default ProductDetails
