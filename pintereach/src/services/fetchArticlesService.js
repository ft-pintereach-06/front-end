import axiosWithAuth from '../utils/AxiosWithAuth';

const fetchArticlesService = () => {
    return axiosWithAuth()
        .get('/ INSERT API END POINT')
            .then((res) => {
                console.log("fetchArticlesService: ", res);
                return(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
}

export default fetchArticlesService;