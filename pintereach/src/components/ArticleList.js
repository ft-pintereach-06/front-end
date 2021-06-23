import React, { useEffect } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/AxiosWithAuth';
// import fetchArticlesService from '../services/fetchArticlesService';

function ArticleList(props) {
    const { articles } = props;

    useEffect(() => {
        //  fetchArticlesService().then((res) => {
        //  console.log("Fetching Articles: ", res)
        //  })

        axiosWithAuth()
        .get('/api/articles/all')
            .then((res) => {
                console.log("Fetching Articles: ", res.data);
                return(res.data);
            })
            .catch((err) => {
                console.log({err});
            })
    }, []);

    console.log("Local Storage Token: ", localStorage.token)

    return (
        <div>
            {/* <ArticleCard /> */}
            {/* articles.map(article => <ArticleCard key={article.id} article={article}) */}
            <Article />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList);


