
function HeaderButton(props) {
    const { children, onClick } = props;
    return (
        <>
            <button
                onClick={onClick}
                className="p-2 text-black duration-300 ease-in-out rounded-md cursor-pointer hover:text-black dark:hover:text-black dark:text-white active:scale-95 active:bg-opacity-80 hover:bg-gray-300 "
            >
                {children}

            </button>
        </>
    )
}

export default HeaderButton