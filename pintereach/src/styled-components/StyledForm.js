import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    color: #ffffff; 
    position: relative;
    min-height: 90vh;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
       
    h2 {
        font-size: 2.8rem;
        text-align: center;
        color: #323232;
    }

    form {
        background: rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-right: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 2em;
        padding-bottom: 3em;
        width: 550px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        backdrop-filter: blur(12px);
        box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
    }

    .form-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    label {
        color: #323232;
        text-align: left;
        padding-left: 2.5rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }

    input {
        background: #e8eeef;
        color: #323232;
        border: none;
        border-radius: 5px;
        padding: 1em;
        margin-top: .25em;
        margin-bottom: .5em;
        width: 82%;
        }   
        
        &:focus {
            outline: none;
        }
    }

    select {
        background: #e8eeef;
        color: #323232;
        border: none;
        border-radius: 5px;
        padding: 1em;
        margin-top: .25em;
        margin-bottom: .5em;
        width: 82%;
        
    }

    button {
        font-weight: 600;
        text-align: center;
        font-size: 1.1rem;
        background-color: #e8eeef;
        color: #242943;
        width: 100%;
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

    .form-button {
        padding-top: 2.5%;
        padding-bottom: 5%;
    }

    @media(max-width: 620px) {
        form {
            width: 300px;
    }
`;

export const StyledLoginForm = ({children}) => {
    return <StyledForm>{children}</StyledForm>;
};