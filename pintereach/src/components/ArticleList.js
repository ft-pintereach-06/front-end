import React, { useEffect } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/index';
import { StyledListCard } from '../styled-components/StyledList';

function ArticleList(props) {
    const { articles } = props;
    
    useEffect(() => {
        props.fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("TESTING", articles)

    return (
        <StyledListCard>
            {articles.map(article => <Article key={article.id} article={article} /> )}
        </StyledListCard>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps, { fetchArticles })(ArticleList);


