import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import axiosWithAuth from '../utils/AxiosWithAuth';
import { StyledLoginForm } from '../styled-components/StyledForm';

const initialValues = {
    username: '',
    email: '',
    password: ''
}

function SignUpForm(props) {
    const { push } = useHistory()
    const [credentials, setCredentials] = useState(initialValues);

    const handleChange = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("SUBMIT TRIGGERING")
        console.log(credentials)

        axiosWithAuth()
            .post('/api/auth/register', credentials)
                .then(res => {
                    push('/')

                })
                .catch(err => {
                    console.log({err})
                })      
        }

    return (
            <StyledLoginForm>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h2>Sign up</h2>
                        <div className="form-content">
                            <label>Username: </label>
                            <div>
                                <input autoFocus type="text" name="username" id="username" onChange={handleChange} placeholder="Username"/>
                            </div>
                            <label>Password: </label>
                            <div>
                                <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password"/>
                            </div>
                        </div>
                    <button>Sign up</button>
                    </form>
                </div>
            </StyledLoginForm>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(SignUpForm);
