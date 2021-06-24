import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    button {
        font-weight: 600;
        text-align: center;
        font-size: 1.1rem;
        background-color: #e8eeef;
        color: #242943;
        border: none;
        border-radius: 5px;
        margin: .5em auto;
        padding: 1%;
        cursor: pointer;
        display: block;
      
        &:hover {
            background-color: #fdbb2d;
            color: #ffffff;
            transition: all .4s ease-in-out;
        }
        transition: all .4s ease-in-out;
    }  
`
export const StyledHomeCard = ({children}) => {
    return <StyledHome>{children}</StyledHome>;
};