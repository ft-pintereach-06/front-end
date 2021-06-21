import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// TO DO
    // Build deleteArticle function 
        //  const deleteArticle = (id) => {
        // let newArticles = articles.filter(article => article.id !== id)
        // setArticles(newArticles)
        // }


function Article(props) {

    const { push } = useHistory();

    const handleDeleteClick = e => {
        e.preventDefault();
        push('/home')
        // axios.delete('INSERT AXIOS END POINT')
        //     .then(res => {
        //         console.log(res)
        //         // CREATE deleteArticle FUNCTION > VERIFY IF res.data IS APPROPRIATE
        //         deleteArticle(res.data);
        //         push('/home');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div>
        {/* <h3>{article.title}</h3>
        <p><b>URL:</b> {article.url}</p>
        <p><b>Category:</b> {article.category}</p>
        <p><b>Importance:</b> {article.importance}</p> */}
       
        <h3>Article Title</h3>
        <p><b>URL:</b> </p>
        <p><b>Category:</b> </p>
        <p><b>Importance:</b> </p>

        <button onClick={handleDeleteClick}>Delete Article</button>
        <p>=========================================</p>

        </div>
    )
}

export default Article;
