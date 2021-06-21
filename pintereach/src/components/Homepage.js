import React from 'react';
import { useHistory } from 'react-router-dom';

function Homepage() {

    let { push } = useHistory()

    const handleFormClick = e => {
        e.preventDefault()
        push('/form')
    }

    return (
        <div>
           <button onClick={handleFormClick}>Add Article</button>
        </div>
    )
}

export default Homepage;
