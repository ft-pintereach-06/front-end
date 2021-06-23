import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
// import axios from 'axios';
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
                    console.log("SIGNUP POST REQUEST - RES; ", res)
                    console.log("SIGNUP POST REQUEST - RES.DATA; ", res.data)
                    push('/home')

                })
                .catch(err => {
                    console.log({err})
                })

        // axios.post("INSERT END POINT", credentials)
        //     .then(res => {
        //         console.log("Axios Login Post Request ", res)
                // localStorage.setItem('user_id', res.data.user.user_id)
                // localStorage.setItem('username', res.data.user.username)
                // localStorage.setItem('email', res.data.user.email)
                // localStorage.setItem('token', res.data.token)                        
                // setCredentials({})
                // push('/DETERMINE PATH & COMPONENT TO ROUTE TO AFTER SIGNUP OR LOGIN')
            // })
            // .catch(err => {
            //     console.log(err)
            // })        
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
                            {/* <label>Email: </label>
                            <div>
                                <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email"/>
                            </div> */}
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
