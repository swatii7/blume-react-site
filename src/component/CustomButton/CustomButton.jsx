import React from 'react'

function CustomButton(props) {

    const {className, onclick, label} = props  //data destructing

    return (
        <div  className='px-5 headerBtn text-start'>
       <button className={className} onClick={onclick}>{label}</button>
       </div>
    )
}

export default CustomButton
