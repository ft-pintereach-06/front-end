import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
`
export const StyledNavBarCard = ({children}) => {
    return <StyledNavBar>{children}</StyledNavBar>;
};