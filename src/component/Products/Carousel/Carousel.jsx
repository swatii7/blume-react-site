import React, { useState } from 'react'
import breakerImg from '../../../assets/Carousel/breaker.png'
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Carousel({data,currentItem, onClick}) {
    
    return (
        <div>
              <Container style={{maxWidth: '1400px'}}>
      <Row className='mt-50 flex-row flex-column-reverse-sm '>
        <Col>
        <div>
            
            <div>
                <p className='fs-24 Quicksand fw-500 caroselPara'>
                {data[currentItem].description}
                </p>
            </div>
            <div className='breakerWrapper'>
                <img src={breakerImg} />
            </div>
            <div className='reviewNamer'>
                <p className='fs-18 fw-6currentItem0'>{data[currentItem].reviewer_name}</p>
            </div>
            </div>
        </Col>
        <Col>
        <div style={{ maxWidth: '100%', height: 'auto' }} className='fs-40 reviewCarousel'>
  {/* <ChevronLeft onClick={onClick} className='chevron left d-lg-none'  style={{ zIndex: 1 }}/> */}
  <img src={data[currentItem].imageSrc} className='currentCarouselImage img-fluid' />
  {/* <ChevronRight onClick={onClick} className='chevron right d-lg-none' style={{ zIndex: 1 }} /> */}
</div>

        </Col>
        <Col>
        <div style={{maxWidth: '100%', height: 'auto'}}>
         <img src= {data.length === currentItem +1 ? data[0].imageSrc  : data[currentItem+1].imageSrc} className='carouselSecondImg opacity' />
        </div>
        </Col>
      </Row>
    </Container>

        </div>

        
    )
}

export default Carousel
