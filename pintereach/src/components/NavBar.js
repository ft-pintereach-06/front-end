import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { StyledNavBarCard } from '../styled-components/StyledNavBar';

export default function NavBar() {
    return (
        <StyledNavBarCard>
                <NavLink className='pintereach' to='/home'>Pintereach</NavLink>
            <nav>
              <div className='links-container'>
                <Link to='/'><button>Login</button></Link>
                <Link to='/signup'><button>Sign Up</button></Link>
              </div>
            </nav>
        </StyledNavBarCard>
    )
}
