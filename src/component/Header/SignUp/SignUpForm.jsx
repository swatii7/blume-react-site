import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Spinner from 'react-bootstrap/Spinner';

function SignUpForm(props) {

    const [state, setState] = useState({
        name: '',
        email: '',
        username:'',
        password: ''
    })

    const [isLoading, setIsLoading]= useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = {}
        if (!state.name.trim()) {
            validationErrors.name = "Name is required"
        }

        if (!state.email.trim()) {
            validationErrors.email = 'Email is required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
            validationErrors.email = 'Email is not valid'
        }

        if(!state.username.trim()){
            validationErrors.username = 'Username is required'
        }
        else if(!/^\S*$/.test(state.username)){
            validationErrors.username = 'Username is not valid'
        }

        if (!state.password.trim()) {
            validationErrors.password = 'Password is required'
        }
        else if (state.password.length < 6) {
            validationErrors.password = 'Enter atleast 6 digit of Strong password'
        }

        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            setIsLoading(true); // Show loader

            setTimeout(() => {
                setIsLoading(false); // Hide loader after 2 seconds

                setState({
                    name: '',
                    email: '',
                    username:'',
                    password: ''
                });
                enqueueSnackbar('Account Create Successfully', { variant: 'success' });
            }, 2000); // 2 seconds delay
        }
      
        
    }


    return (
        <SnackbarProvider>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            lg={8} md={12} xs={12}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='fs-28 fw-700 Cooper' >
                    Create an account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className='mb-2'>
                            Enter Name
                        </label>
                        <input
                            type="name"
                            className="form-control fs-20"
                            id="name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            name='name'
                            value={state.name}
                        />
                        {errors.name && <span className='textRed'>{errors.name}</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="email" className='mb-2'>
                            Enter Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control fs-20"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={state.email}
                            name='email'
                            onChange={handleChange}
                        />
                        {errors.email && <span className='textRed'>{errors.email}</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="username" className='mb-2'>
                            Username
                        </label>
                        <input
                            type="username"
                            className="form-control fs-20"
                            id="username"
                            placeholder="username"
                            value={state.username}
                            name='username'
                            onChange={handleChange}
                        />
                        {errors.username && <span className='textRed'>{errors.username}</span>}
                        </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className='mb-2'>
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control fs-20"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            name='password'
                            onChange={handleChange}
                        />
                        {errors.password && <span className='textRed'>{errors.password}</span>}
                    </div>


                    <button type="submit"
                        className="createAccountBtn mt-4"
                        disabled={isLoading}>
                                   {isLoading? <Spinner animation="border" role="status" className='mx-4'>
      <span className="visually-hidden" isLoading={state.isLoading}>Loading...</span>
    </Spinner>: 'Create Account'}
                        
                    </button>
             
                    
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{backgroundColor: 'rgba(22,45,74)', border: 'none'}} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        </SnackbarProvider>
    )

}

export default SignUpForm

