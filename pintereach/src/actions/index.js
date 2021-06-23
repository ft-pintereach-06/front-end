import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const SET_ERROR = "SET_ERROR";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const SET_ARTICLES = "SET_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const fetchArticles = () => {
    return (dispatch) => {
        // Starting Fetch Process
        dispatch(fetchStart());

        // Fetching Data From API
        axiosWithAuth()
        .get('/api/articles/all')
        .then(res => { 
            // Successful Fetch
            dispatch(fetchSuccess(res.data))
        })
            // Unsuccessful Fetch
        .catch(err => {
            dispatch(fetchFail(err));
        });
    }
}

export const fetchStart = () => {
    return ({type: FETCH_START})
}

export const fetchSuccess = (article) => {
    return ({type: FETCH_SUCCESS, payload: article})
}

export const fetchFail = (error) => {
    return ({type: FETCH_FAIL, payload: error})
}

export const addArticle = (article) => {
    return({type: ADD_ARTICLE, payload: article})
}

export const setError = (error) => {
    return({type: SET_ERROR, payload: error})
}

export const loginSuccessful = (credentials) => {
    return({type: LOGIN_SUCCESSFUL, payload: credentials})
}

// export const setArticles = (articles) => {
//     return({type: SET_ARTICLES, payload: articles})
// }

export const deleteArticle = (article) => {
    return({type: DELETE_ARTICLE, payload: article})
}