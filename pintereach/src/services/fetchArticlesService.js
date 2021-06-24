import axiosWithAuth from '../utils/AxiosWithAuth';

const fetchArticlesService = () => {
    return axiosWithAuth()
        .get('api/articles/')
            .then((res) => {
                console.log("fetchArticlesService: ", res);
                return(res.data);
            })
            .catch((err) => {
                console.log({err});
            })
}

export default fetchArticlesService;