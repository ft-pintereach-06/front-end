import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledArticleCard } from '../styled-components/StyledArticle';

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
            <StyledArticleCard>
                <div className="ArticleContainer">
                    {/* <h2>{article.title}</h2>
                    <p><a href={article.url}>{article.url}</a></p>
                    <p><b>Category:</b> {article.category}</p>
                    <p><b>Importance:</b> {article.importance}</p> */}

                    {/* <p><b>ArticleTitle:</b>  Clinical Research Trial</p> */}
                    {/* <h2>Clinical Research Trial</h2>
                    <p><a href="www.clinicaltrials.org">www.clinicaltrials.org</a></p>
                    <p><b>Category:</b> Clinical Research</p>
                    <p><b>Importance:</b> Medium</p> */}

                    <button onClick={handleDeleteClick}>Delete Article</button>
                </div>  
            </StyledArticleCard>
        </div>
    )
}

export default Article;
