
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
        <textarea
            id={id}
            className="  focus:ring-2
                        ring-2
                        rounded-3xl
                        outline-none
                        focus:outline-none  p-3"
            {...field}
            {...props}
            cols="30"
            rows="5"
            placeholder="Description"
        />
    );
}

export default TextArea;
