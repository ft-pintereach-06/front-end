import React from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { StyledArticleCard } from '../styled-components/StyledArticle';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

function Article(props) {

    const { article } = props

    const handleDeleteClick = e => {
        e.preventDefault();

        axiosWithAuth()
            .delete(`/api/articles/${article.article_id}`)
            .then(res => {
                props.deleteArticle(res.data.article_id)
            })
            .catch(err => {
                console.log({err})
            })
    }

    return (
            <StyledArticleCard>
                <div className="ArticleContainer">
                    
                    <h2> {article.article_title} </h2>
                    <a href={article.article_url} target="_blank" rel="noreferrer">{article.article_url}</a>
                    <p><b>Category:</b> {article.category}</p>
                    <p><b>Importance:</b> {article.article_importance}</p>
                    
                    <button onClick={handleDeleteClick}>Delete Article</button>
                </div>  
            </StyledArticleCard>
    )
}

export default connect(null, {deleteArticle})(Article);
