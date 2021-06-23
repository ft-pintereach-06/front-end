import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_ARTICLE, SET_ERROR, LOGIN_SUCCESSFUL, SET_ARTICLES, DELETE_ARTICLE } from './../actions/index';

export const initialState = {
    credentials: {},
    registered: [],
    articles: [],
    isLoading: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                articles: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_ARTICLE:
                const newArticle = {
                    ...action.payload,
                    // id: Date.now()
                }

                return {
                ...state,
                articles: [...state.articles, newArticle]
                }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                registered: action.payload 
            }
        // case SET_ARTICLES:
        //     return {
        //         ...state,
        //         articles: [...state.articles, action.payload]
        //         // articles: [action.payload]

        //     }
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(item=>(action.payload !== item.id))
            }
        default: 
            return state;
    }
};

export default reducer;