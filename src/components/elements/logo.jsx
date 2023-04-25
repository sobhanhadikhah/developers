import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            to={"/"}
            className='p-3 font-mono font-semibold text-white bg-sky-400 rounded-xl' >
            DEVELOPERS

        </Link>
    );
}

export default Logo;
