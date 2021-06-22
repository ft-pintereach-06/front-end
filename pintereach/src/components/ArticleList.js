import React, { useEffect } from 'react';
import Article from './Article';
import fetchArticlesService from '../services/fetchArticlesService';

function ArticleList(props) {
    // const { articles } = props;

    // useEffect on mount
    // useEffect(() => {
    //     fetchArticlesService().then((res) => {
    //     setArticles(res)
    //     })
    // }, []);

    return (
        <div>
            {/* <ArticleCard /> */}
            {/* articles.map(article => <ArticleCard key={article.id} article={article}) */}
            <Article />
        </div>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

// export default connect(mapStateToProps)(ArticleList);

export default ArticleList;

