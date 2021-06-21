import React from 'react';
import { StyledLoginForm } from '../styled-components/StyledForm';
import { useHistory } from 'react-router';

// TO DO
    // set up validation to not allow form to be submitted if fields are empty


export default function ArticleForm(props) {

    let { push } = useHistory();

    const handleSaveClick = e => {
        e.preventDefault();
        push('/home')
        // axios.post('INSERT AXIOS END POINT')
        //     .then(res => {
        //         console.log(res)
        //         // CREATE addArticle FUNCTION > VERIFY IF res.data IS APPROPRIATE
        //         addArticle(res.data);
        //         push('/home');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <div className='container'>
            <StyledLoginForm>
                <form>
                    <div className='form-content'>
                    <h2>Add Article</h2>

                        <label>Title:</label>
                            <div>
                            <input name='title' type='text' placeholder='Title' />
                            </div>

                        <label>Link to Article:</label>
                            <div>
                            <input name='url' type='text' placeholder='Url' />
                            </div>
                        
                        <label>Importance:</label>
                        <div>
                            <select name='importance'>
                                <option value=''>--Select Importance--</option>
                                <option value='low'>Low</option>
                                <option value='medium'>Medium</option>
                                <option value='high'>High</option>
                            </select>
                            </div>

                        <label>Category:</label>
                        <div>
                            <select name='category'>
                                <option value=''>--Select Category--</option>
                                <option value='original'>Original research</option>
                                <option value='review'>Review article</option>
                                <option value='clinical case'>Clinical case study</option>
                                <option value='clinical trial'>Clinical trial</option>
                                <option value='poc'>Perspective, opinion, and commentary</option>
                                <option value='book'>Book review</option>
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