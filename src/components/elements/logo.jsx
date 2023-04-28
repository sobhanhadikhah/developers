import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            to={"/"}
            className='p-3 font-mono font-semibold text-white rounded-md bg-sky-400 dark:bg-transparent' >
            DEVELOPERS
        </Link>
    );
}

export default Logo;
