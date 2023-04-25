import { Link } from "react-router-dom";

const Button = ({
    children,
    path,
    bgColor,
    varient,
    transparent,
    onClick,
    textColor,
    type
}) => {
    return (
        <button
            onClick={onClick ? onClick : null}
            className="flex"
            type={type}
        >

            <Link

                to={path}
                className={`w-fit rounded-full py-2 px-8 cursor-pointer active:scale-95
                shadow-md text-xs duration-300 
                ${transparent ? "bg-transparent  border-2 border-black  " : null}
                ${bgColor ? bgColor : "bg-[#1a5cff]"} 
                active:bg-opacity-80
                ease-in-out  font-medium md:text-sm
                ${textColor ? textColor : "text-white"}
                ${varient}
            `}
            >

                {children ? children : "default"}

            </Link>
        </button>
    );
}

export default Button;
