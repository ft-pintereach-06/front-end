import React from 'react'
import styled from 'styled-components'

const StyledList = styled.div`
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const StyledListCard = ({children}) => {
    return <StyledList>{children}</StyledList>;
};