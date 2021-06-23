import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
         baseURL: 'https://ft-pintereach-06.herokuapp.com/'
    })
}

export default axiosWithAuth;