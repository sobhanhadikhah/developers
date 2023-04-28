
const TextArea = ({
    id,
    placeholder,
    lable,
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    children,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-3 text-black dark:text-sky-400" >
            <label className="text-xl font-extrabold uppercase " htmlFor={id}>Description</label>
            <textarea
                id={id}
                className="px-4 py-3 duration-200 outline-none focus:px-6 focus:ring-2 ring-2 dark:ring-white rounded-3xl dark:placeholder:text-white dark:bg-transparent dark:text-white "
                {...field}
                {...props}
                cols="30"
                rows="5"
                placeholder="Write your thoughts here..."
            />
        </div>
    );
}

export default TextArea;
