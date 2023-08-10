import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function CustomInput(props) {

    const {label, type, placeholder, name, value, onchange } = props

    return (

        <FloatingLabel
        // controlId="floatingInput"
        label={label}
        className="mb-3"
      >
        <Form.Control 
         name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onchange} />
      </FloatingLabel>
    )
}

export default CustomInput
