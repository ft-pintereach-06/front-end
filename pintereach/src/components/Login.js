import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledLoginForm } from '../styled-components/StyledForm';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { loginSuccessful } from '../actions/index';


function Login(props) {
    let { push } = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const handleChange = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    // console.log(credentials)

    const handleLoginClick = e => {
        e.preventDefault()
        console.log(credentials)
        // push('/home')
        axiosWithAuth()
            .post('/api/auth/login', credentials)
            .then(res => {
                console.log("Axios Login Post: ", res)
                localStorage.setItem('token', res.data.token)
                console.log("Local Storage Token: ", localStorage.token)
                push('/home')
                // axiosWithAuth()
                //     .get('/api/articles/:id')
                //     console.log(res)
                //     .then(res => {
                //         console.log(res)
                //     props.loginSuccess(res.data)
                //     localStorage.setItem('user_id', res.data.user_id)
                //     localStorage.setItem('username', res.data.username)
                //     localStorage.setItem('email', res.data.email)
                })
            .catch(err => {
                console.log(err)
            })
            // push('/home')
        }
        // .catch(err => {
        //     console.log(err.message)
    
    const handleRegisterClick = e => {
        e.preventDefault()
        push('/SignUp')
    }

    return (
            <StyledLoginForm>
                <div className="container">
                    <form>
                        <h2>Log in</h2>
                        <div className="form-content">
                            <label>Username: </label>
                            <div>
                                <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Name"/>
                            </div>

                            <label>Password: </label>
                            <div>
                                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password"/>
                            </div>
                            <button onClick={handleLoginClick}>Log in</button>
                            <button onClick={handleRegisterClick}>Register</button>
                        </div>
                    </form>
                </div>
            </StyledLoginForm>
    )
}

const mapStateToProps = state => {
    return {
        credentials: state.credentials,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { loginSuccessful })(Login);
