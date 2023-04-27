import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            to={"/"}
            className='p-3 font-mono font-semibold text-white dark:text-sky-400 bg-sky-400 dark:bg-white rounded-md' >
            DEVELOPERS
        </Link>
    );
}

export default Logo;
