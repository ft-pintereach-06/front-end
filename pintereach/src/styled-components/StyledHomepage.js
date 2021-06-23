import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`
export const StyledHomeCard = ({children}) => {
    return <StyledHome>{children}</StyledHome>;
};