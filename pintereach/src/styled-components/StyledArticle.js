import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.div`
    /* background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);*/
    color: #ffffff; 
    margin: 0;
    width: 33%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: stretch;
    box-sizing: border-box;
    padding: 1%1%;

    @media (max-width: 550px) {
        max-width:100%;
    }


    .ArticleContainer {
        /* background: rgba(255, 255, 255, 0.1); */
        /* backdrop-filter: blur(12px); */
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-right: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 5%5px;
        padding-bottom: 1%;
        white-space: normal;
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        box-shadow: 0 26px 42px rgba(0, 0, 0, 0.1);
    }

    h2 {
        width: 100%;
        object-fit: scale;
        flex-shrink: 2;
    }

    a {
        color: #ffffff;
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
`;


export const StyledArticleCard = ({children}) => {
    return <StyledArticle>{children}</StyledArticle>;
};