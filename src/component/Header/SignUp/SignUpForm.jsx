import React, { useState } from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

function SignUpForm() {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

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

console.log(state, 'state')
        if (!state.email.trim()) {
            validationErrors.email = 'Email is required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
            validationErrors.email = 'Email is not valid'
        }

        if (!state.password.trim()) {
            validationErrors.password = 'Password is required'
        }
        else if (state.password.length < 6) {
            validationErrors.password = 'Enter atleast 6 digit of Strong password'
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Account Create Successfully")
        }
    }

    return (
        <SnackbarProvider>
            <div className='signupContainer'>
                <h5 className='fs-28 fw-700 Cooper'>Create an account</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"
                            className='mb-2'>
                            Enter Name
                        </label>
                        <input type="name"
                            className="form-control fs-20"
                            id="exampleInputName"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            name='name'
                            value={state.name} />
                        {errors.name && <span className='textRed'>{errors.name}</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputEmail1"
                            className='mb-2'>
                            Enter Email Address
                        </label>
                        <input type="email"
                            className="form-control fs-20"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={state.email}
                            name='email'
                            onChange={handleChange} />
                        {errors.email && <span className='textRed'>{errors.email}</span>}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputPassword1"
                            className='mb-2'>
                            Password
                        </label>
                        <input type="password"
                            className="form-control fs-20"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={state.password}
                            name='password'
                            onChange={handleChange} />
                        {errors.password && <span className='textRed'>{errors.password}</span>}
                    </div>

                    <button type="submit"
                        className="createAccountBtn mt-4">
                        Create Account
                    </button>
                </form>
            </div>
        </SnackbarProvider>
    )

}

export default SignUpForm

