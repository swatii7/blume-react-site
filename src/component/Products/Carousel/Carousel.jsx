import React, { useState } from 'react'
import breakerImg from '../../../assets/Carousel/breaker.png'
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Carousel({data,currentItem, onClick}) {
    
    return (
        <div>
        <Container style={{ maxWidth: '1400px' }}>
          <Row className='mt-50 flex-column-reverse flex-md-row'>
            <Col>
              <div>
                <div>
                  <p className='fs-24 Quicksand fw-500 caroselPara text-center'>
                    {data[currentItem].description}
                  </p>
                </div>
                <div className='breakerWrapper'>
                  <img src={breakerImg} alt='breaker' />
                </div>
                <div className='reviewNamer'>
                  <p className='fs-18 fw-600'>{data[currentItem].reviewer_name}</p>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ maxWidth: '100%', height: 'auto' }} className='fs-40 reviewCarousel'>
                <img src={data[currentItem].imageSrc} alt='carousel-1' className='currentCarouselImage img-fluid' />
              </div>
            </Col>
            <Col className='d-none d-md-block'>
              {/* Display only on large screens */}
              <div style={{ maxWidth: '100%', height: 'auto' }}>
                <img
                  src={data.length === currentItem + 1 ? data[0].imageSrc : data[currentItem + 1].imageSrc}
                  alt='carousel-2'
                  className='carouselSecondImg opacity'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      

        
    )
}

export default Carousel
