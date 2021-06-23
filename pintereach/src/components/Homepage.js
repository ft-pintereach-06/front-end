import React from 'react';
import { useHistory } from 'react-router-dom';
import ArticleList from './ArticleList';

function Homepage() {

    let { push } = useHistory()

    const handleFormClick = e => {
        e.preventDefault()
        push('/form')
    }

    return (
        <div>
            <br></br>
            <br></br>
            <button onClick={handleFormClick}>Add Article</button>
            <h1>Article Board</h1> 
             
            <ArticleList />
        </div>
    )
}
export default Homepage;
