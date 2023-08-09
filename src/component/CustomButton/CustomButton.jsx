import React from 'react'

function CustomButton(props) {

    const {className, onclick, label} = props  //data destructing

    return (
        <div  className='mt-5 px-5 mx-5 headerBtn'>
       <button className={className} onClick={onclick}>{label}</button>
       </div>
    )
}

export default CustomButton
