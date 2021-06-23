import React from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { StyledArticleCard } from '../styled-components/StyledArticle';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

function Article(props) {

    const { articles, article } = props

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
        <div>
            <StyledArticleCard>
                <div className="ArticleContainer">
                    
                    <h2> {article.article_title} </h2>
                    <a href={articles.url}>{article.article_url}</a>
                    <p><b>Category:</b> {article.category}</p>
                    <p><b>Importance:</b> {article.article_importance}</p>
                    
                    <button onClick={handleDeleteClick}>Delete Article</button>
                </div>  
            </StyledArticleCard>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps, {deleteArticle})(Article);
