import React from 'react';
import { useHistory } from 'react-router-dom';
import ArticleList from './ArticleList';
import { StyledHomeCard } from '../styled-components/StyledHomepage';

function Homepage() {

    let { push } = useHistory()

    const handleFormClick = e => {
        e.preventDefault()
        push('/form')
    }

    return (
        <StyledHomeCard>
            <br></br>
            <br></br>
            <button onClick={handleFormClick}>Add Article</button>
            {/* <p>------------------------------------------</p> */}
            <h1>Article Board</h1> 
                <ArticleList />
        </StyledHomeCard>
    )
}
export default Homepage;
