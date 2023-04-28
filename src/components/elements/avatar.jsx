import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Avatar({ src }) {
    return (
        <LazyLoadImage
            effect='blur'
            className='w-8 h-8 duration-200 ease-in-out rounded-full dura group-hover:scale-150 '
            src={`${src && src}`}
            alt="profile" />
    )
}

export default Avatar