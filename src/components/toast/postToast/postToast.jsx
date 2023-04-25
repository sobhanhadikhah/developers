
function PostToast({ toastProps, closeToast }) {
    return (
        <div>
            <p>Welcome {toastProps.position}</p>
            <button onClick={closeToast}></button>
        </div>
    );
}

export default PostToast;
