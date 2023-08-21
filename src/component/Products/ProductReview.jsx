import React,{useState} from 'react'
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'
import Carousel from './Carousel/Carousel'
import caraImg from '../../assets/Carousel/cara.jpg'
import danielleImg from '../../assets/Carousel/danielle.jpg'
import airhugImg from '../../assets/Carousel/airhug.jpg'

const items= [
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

function ProductReview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrev(){
        console.log('prev clicked')
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex-1);
        }else{
            setCurrentIndex(items.length-1) 
        }
    }

    function handleNext(){
        console.log('next clicked')
        const courselItems = items.length;
        if(currentIndex+1 < courselItems) {
            setCurrentIndex(currentIndex+1);
        }else{
            setCurrentIndex(0)
        }
    }

    
    return (
        <div className='reviewContainer'>
        <div className='d-flex reviewWrapper text-center sm-fs-30'>
          <h2 className='fs-50 Cooper sm-fs-30'>Not to brag, but people are loving us</h2>
          <div className='fs-40 d-sm-block'> {/* Display on large screens */}
            <ChevronLeft onClick={handlePrev} className='leftIcon' /> <ChevronRight onClick={handleNext} className='rightIcon' />
          </div>
        </div>
        <div>
          <Carousel data={items} currentItem={currentIndex} />
        </div>
      </div>
      
    )
}

export default ProductReview
