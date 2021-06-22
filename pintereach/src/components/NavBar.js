import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to='/home'><h1>Pintereach</h1></Link>
            <Link to='/'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}
