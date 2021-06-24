import React, { useState } from 'react';
import { StyledLoginForm } from '../styled-components/StyledForm';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { addArticle } from '../actions';

const initialValues = {
}

function ArticleForm(props) {
    const [article, setArticle] = useState(initialValues)
    let { push } = useHistory();
    const handleChange = e => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value,
        })
    }
    console.log(article);
    const handleSaveClick = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/articles/', article)
            .then(res => {
                addArticle(res.data);
                push('/home')
            })
            .catch(err => {
                console.log({err});
            })
        
    }
    return (
        <div className='container'>
            <StyledLoginForm>
                <form>
                    <div className='form-content'>
                    <h2>Add Article</h2>
                        <label>Title:</label>
                            <div>
                            <input onChange={handleChange} name='article_title' type='text' placeholder='Title' />
                            </div>
                        <label>Link to Article:</label>
                            <div>
                            <input onChange={handleChange} name='article_url' type='text' placeholder='Url' />
                            </div>
                        <label>Importance:</label>
                        <div>
                            <select onChange={handleChange} name='article_importance'>
                                <option value=''>--Select Importance--</option>
                                <option value='Low'>Low</option>
                                <option value='Medium'>Medium</option>
                                <option value='High'>High</option>
                            </select>
                            </div>
                        <label>Category:</label>
                        <div>
                            <select onChange={handleChange} name='category'>
                                <option value=''>--Select Category--</option>
                                <option value='Original research'>Original research</option>
                                <option value='Review article'>Review article</option>
                                <option value='Clinical case study'>Clinical case study</option>
                                <option value='Clinical trial'>Clinical trial</option>
                                <option value='Perspective, opinion, and commentary'>Perspective, opinion, and commentary</option>
                                <option value='Book review'>Book review</option>
                            </select>
                            </div>
                        <div>
                        <button onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                </form>
            </StyledLoginForm>
        </div>
    );
}
const mapStateToProps = state => {
    return{
        articles: state.articles
    }
}
export default connect(mapStateToProps, {addArticle})(ArticleForm);