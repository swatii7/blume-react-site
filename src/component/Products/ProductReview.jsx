import React from 'react'
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'
import Carousel from './Carousel/Carousel'
function ProductReview() {

    function handlePrev(){
        console.log('i m go')
    }

    function handleNext(){
        console.log('i m in')
    }
    
    return (
        <div className='reviewContainer'>
        <div className='d-flex reviewWrapper'>
            <h2 className='fs-50 Cooper'>Not to brag, but people are loving us</h2>
            <div className='flex-grow-1'></div> {/* Flex grow to push icons to the right */}
            <div className='fs-40'>
                <ChevronLeft onClick={handlePrev} /> <ChevronRight onClick={handleNext} />
            </div>
        </div>
        <div>
            <Carousel />
        </div>
    </div>
    )
}

export default ProductReview
