import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CustomInput(props) {

  
    const {label, type, placeholder, name, value, onchange, className, error} = props
    const inputStyle = {
      '::placeholder': {
        color: 'gray', // Default to gray if no color is provided
      },
    };
    return (

        <FloatingLabel
        // controlId="floatingInput"
        label={label}
        // className= {className}
        
      >
        <Form.Control 
        style={inputStyle}
         name={name}
          type={type}
          placeholder={placeholder}
          className= {className}
          placeholdercolor= {`{error ? "white" : "blue"}`}
          // placeholdercolor="blue" // Change this to your desired color

          value={value}
          onChange={onchange}
          
          />
      </FloatingLabel>
    )
}

export default CustomInput
