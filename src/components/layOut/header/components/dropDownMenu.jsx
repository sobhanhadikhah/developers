

function DropDownMenu(props) {
    const { children, animateOnToggle } = props
    return (
        <div
            className={` ${animateOnToggle ? "lg:flex" : "hidden"} absolute mr-40   `} >
            <div
                className="absolute flex-col items-center hidden p-3 text-black dark:text-white dark:bg-black bg-white border border-black shadow-sm lg:flex top-5 gap-y-2 rounded-xl " >

                {children}
            </div>
        </div>
    )
}

export default DropDownMenu;