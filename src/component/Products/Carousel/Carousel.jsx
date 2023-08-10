import React, { useState } from 'react'
import breakerImg from '../../../assets/Carousel/breaker.png'
import caraImg from '../../../assets/Carousel/cara.jpg'
import danielleImg from '../../../assets/Carousel/danielle.jpg'
import airhugImg from '../../../assets/Carousel/airhug.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Carousel() {

    const Carousel_details= [
       {
        imageSrc: caraImg,
        description: "I've been using Stargirl every day, twice a day, and I'm loving it! It's so refreshing and I love when toners come in a spray bottle. My face instantly feels lifted and looks dewy 😇",
        reviewer_name: "CARA (@XOCARAMONICA)"
       } ,
       {
        imageSrc: danielleImg,
        description: "I’ve been loving this @blume pms roller even when im not pmsing. If you’re not on the pms oils it’s time to get on. They have helped me so much. *gifted",
        reviewer_name: "DANIELLE (@SPLAAAAAASHHHHHH)"
       } ,
       {
        imageSrc: airhugImg,
        description: "Awesome stuff! Doesn’t dry out your hands! Work at the hospital and no need to worry about a heavy scent! 💯",
        reviewer_name: "FREVI K."
       }

    ]

    const [currentState, setCurrentState] = useState(0)
    
    return (
        <div>
              <Container style={{maxWidth: '1400px'}}>
      <Row className='mt-50'>
        <Col>
        <div>
            
            <div>
                <p className='fs-24 Quicksand fw-500 caroselPara'>
                {Carousel_details[0].description}
                </p>
            </div>
            <div className='breakerWrapper'>
                <img src={breakerImg} />
            </div>
            <div className='reviewNamer'>
                <p className='fs-18 fw-600'>{Carousel_details[0].reviewer_name}</p>
            </div>
            </div>
        </Col>
        <Col>
        <div style={{maxWidth: '100%', height: 'auto'}}>
        <img src={Carousel_details[0].imageSrc} className='currentCarouselImage' />
        </div>
        </Col>
        <Col>
        <div style={{maxWidth: '100%', height: 'auto'}}>
        <img src= {Carousel_details[1].imageSrc} className='carouselSecondImg' />
        </div>
        </Col>
      </Row>
    </Container>

        </div>
    )
}

export default Carousel
