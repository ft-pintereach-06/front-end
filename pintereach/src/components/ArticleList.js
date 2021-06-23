import React, { useEffect } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { fetchArticles } from '../actions/index';
import fetchArticlesService from '../services/fetchArticlesService';
import {StyledListCard} from '../styled-components/StyledList'

function ArticleList(props) {
    const { articles } = props;
    
    useEffect(() => {
        props.fetchArticles();
        console.log("Fetching Articles: ", fetchArticles)

        // fetchArticlesService().then((res) => {
        // console.log("Fetching Articles: ", res)
        // // setArticles(res)
        // })

        // axiosWithAuth()
        // .get('/api/articles/all')
        //     .then((res) => {
        //         console.log("Fetching Articles: RES ", res)
        //         console.log("Fetching Articles: RES.DATA", res.data);
        //         setArticles(res.data)
        //         // return(res.data);
        //     })
        //     .catch((err) => {
        //         console.log({err});
        //     })
    }, []);

    // console.log("Local Storage Token: ", localStorage.token)
    console.log("Articles :", articles)

    return (
        <StyledListCard>
            {articles.map(article => <Article key={article.id} article={article} /> )}
            {/* {articles[0].map(article => <Article key={article.id} article={article} /> )} */}

            {/* {articles[0].map(article => (
                    <div key={article.id}>
                        <p>{article.article_title}</p>
                        <p>{article.article_url}</p>
                        <p>{article.article_importance}</p>
                        <p>{article.category}</p>
                        <p>---------------</p>
                    </div>
                )
                )} */}

            {/* <Article /> */}
            {/* {articles.map(article => <Article key={article.id} />)} */}
            
            
            {/* <h2> `${articles.article_title}` </h2>
                        <p><a href={articles.url}>{articles.article_url}</a></p>
                        <p><b>Category:</b> {articles.category}</p>
                        <p><b>Importance:</b> {articles.article_importance}</p>} */}

        </StyledListCard>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps, { fetchArticles })(ArticleList);


