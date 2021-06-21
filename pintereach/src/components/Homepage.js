import React from 'react';
import { useHistory } from 'react-router-dom';

import ArticleList from './ArticleList';

import ArticleList from './ArticleList';

function Homepage() {

    let { push } = useHistory()

    const handleFormClick = e => {
        e.preventDefault()
        push('/form')
    }

    return (
        <div>
           <h1>Article Board</h1> 
        <ArticleList />
        </div>
    )
}

export default Homepage;
