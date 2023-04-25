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

        <input
            id={id}
            {...props}
            {...field}
            className="   focus:ring-sky-400 ring-2 bg-transparent outline-none
                        py-3 px-4  rounded-3xl border-2
                        focus:px-6 duration-200"
            type="text"
            placeholder="Title"
        />

    );
}

export default InputTitle;
