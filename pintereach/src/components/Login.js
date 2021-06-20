import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { axiosWithAuth } from '../utils/AxiosWithAuth'

function Login(props) {
    // let { push } = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })


    const handleChange = e => {
        console.log(credentials)
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const handleLoginClick = e => {
        e.preventDefault()
        console.log("SUBMIT TRIGGERING")
        console.log(credentials)
        // axiosWithAuth().post('INSERT END POINT', credentials)
        // .then(res => {
            // localStorage.setItem('token', res.data.token)
            // axiosWithAuth().get('INSERT END POINT')
            // .then(res => {
            //     props.loginSuccess(res.data)
            //     localStorage.setItem('user_id', res.data.user_id)
            //     localStorage.setItem('username', res.data.username)
            //     localStorage.setItem('email', res.data.email)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            // push('/Home')
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //     })
    }

    const handleRegisterClick = e => {
        e.preventDefault()
        // push('/SignUp')
    }

    return (
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
    )
}

// const mapStateToProps = state => {
//     return {
//         credentials: state.credentials,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps)(LoginForm);
export default Login;