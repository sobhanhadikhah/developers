import React from 'react';

const InputTitle = ({
    id,
    placeholder,
    lable,
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    children,
    ...props
}) => {
    return (

        <div className='flex flex-col gap-3 ' >
            <label className="text-xl font-extrabold tracking-widest uppercase dark:text-sky-400 " htmlFor={id}>Title</label>

            <input
                id={id}
                {...props}
                {...field}
                className="px-4 py-3 duration-200 bg-transparent border-2 outline-none focus:ring-sky-400 dark:focus:ring-0 ring-2 rounded-3xl focus:px-6 dark:placeholder:text-white dark:text-white"
                type="text"
                placeholder="Write your subject here..."
            />
        </div>

    );
}

export default InputTitle;
