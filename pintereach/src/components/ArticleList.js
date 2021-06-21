import React from 'react';
import Article from './Article';

function ArticleList(props) {
    // const { articles } = props;

    // useEffect on mount?

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

