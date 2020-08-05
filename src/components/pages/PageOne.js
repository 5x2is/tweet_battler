import React from 'react';
import {Link} from 'react-router-dom';

const PageOne = () =>{
    return(
        <div>
        pageOne
        <Link to='/'>
        <button>
        go to home
        </button>
        </Link>
        </div>
    );
};
export default PageOne;
