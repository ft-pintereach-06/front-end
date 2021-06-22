import React from 'react'
import { Link } from 'react-router-dom'
// import { StyledNavBarCard } from '../styled-components/StyledNavBar';
import styled from 'styled-components'

const NavContainer = styled.div`
    text-align: center;
    width: 100%;
`
const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
`

const StyledTitle = styled(Link)`
    color: white;
    text-decoration: none;
    background: red;
    background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);
    background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5vw;
`

const StyledLinks = styled(Link)`
    margin-right: 10px;    
`
const StyledButton = styled.button`
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.3);
    border-right: 1px solid rgba(255,255,255,0.3);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-radius: 5px;
    color: white;

    &:hover {
        background: linear-gradient(0deg, rgba(1,195,193,34) 0%, rgba(1,45,187,253) 100%);
    }
`

export default function NavBar() {
    return (
        <NavContainer>
            <StyledNavBar>
                <StyledTitle to='/home'>Pintereach</StyledTitle>
              <div>
                <StyledLinks to='/'><StyledButton>Login</StyledButton></StyledLinks>
                <StyledLinks to='/signup'><StyledButton>Sign Up</StyledButton></StyledLinks>
              </div>
            </StyledNavBar>
        </NavContainer>
    )
}
