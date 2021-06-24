import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
   text-align:center;
   background-color: #282c34;
   width:100%;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid white;

   @media (max-width: 550px) {
        justify-content: center;
    }
   

   .pintereach{
    max-width: 50%;
    text-decoration: none;
    background: red;
    background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);
    background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
    -webkit-background-clip: text;
        background-clip: 0;
    -webkit-text-fill-color: transparent;
    font-size: 5vw;
   }

   nav {
       padding: 1%1%;
   }
   div .links-container {
       width: 50%fit-content;
   }

   Link {
       margin-right: 10px;
   }

   button {
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.3);
    border-right: 1px solid rgba(255,255,255,0.3);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-radius: 5px;
    color: white;

    &:hover {
        background: linear-gradient(0deg, rgba(1,195,193,34) 0%, rgba(1,45,187,253) 100%);
        transition: all .4s ease-in-out;
    }

    transition: all .4s ease-in-out;
   }

`
export const StyledNavBarCard = ({children}) => {
    return <StyledNavBar>{children}</StyledNavBar>;
};