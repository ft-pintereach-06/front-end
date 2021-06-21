import React from 'react';

export default function ArticleForm(props) {

    return (
        <div className='container'>
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
                    <button>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}