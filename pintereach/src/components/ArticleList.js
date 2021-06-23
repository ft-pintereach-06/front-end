import React, { useEffect } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/index';

function ArticleList(props) {
    const { articles } = props;
    
    useEffect(() => {
        props.fetchArticles();
        console.log("Fetching Articles: ", fetchArticles)
    }, []);

    return (
        <div>
            {articles.map(article => <Article key={article.id} article={article} /> )}
            {/* {articles[0].map(article => <Article key={article.id} article={article} /> )} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps, { fetchArticles })(ArticleList);


