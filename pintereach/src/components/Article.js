import React from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { StyledArticleCard } from '../styled-components/StyledArticle';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions/index';

// TO DO
    // Build deleteArticle function 
        //  const deleteArticle = (id) => {
        // let newArticles = articles.filter(article => article.id !== id)
        // setArticles(newArticles)
        // }


function Article(props) {

    const { push } = useHistory();
    const { articles, article } = props

    const handleDeleteClick = e => {
        e.preventDefault();
        // push('/home')
        // axiosWithAuth()
        //     .delete('/api/articles/:id')
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log({err})
        //     })

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
                        {/* <h2> {articles.article_title} </h2>
                        <p><a href={articles.url}>{articles.article_url}</a></p>
                        <p><b>Category:</b> {articles.category}</p>
                        <p><b>Importance:</b> {articles.article_importance}</p> */}

                        <h2> {article.article_title} </h2>
                        <p><a href={article.url}>{articles.article_url}</a></p>
                        <p><b>Category:</b> {article.category}</p>
                        <p><b>Importance:</b> {article.article_importance}</p>
                {/* {
                    props.articles.map(article=>{
                    return <div key={article.id}>
                        <h2> `${articles.article_title}` </h2>
                        <p><a href={articles.url}>{articles.article_url}</a></p>
                        <p><b>Category:</b> {articles.category}</p>
                        <p><b>Importance:</b> {articles.article_importance}</p>
                    </div>
                    })
                } */}
                    
                    {/* <h2> {articles.article_title} </h2>
                    <p><a href={articles.url}>{articles.article_url}</a></p>
                    <p><b>Category:</b> {articles.category}</p>
                    <p><b>Importance:</b> {articles.article_importance}</p>
 */}

                    {/* HARD CODED DUMMY VALUES FOR TESTING */}
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

// export default Article;

const mapStateToProps = state => {
    return{
        articles: state.articles
    }
}
export default connect(mapStateToProps, {deleteArticle})(Article);
