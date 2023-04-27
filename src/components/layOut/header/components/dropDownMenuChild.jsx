import { Link } from "react-router-dom"

function DropDownMenuChild(props) {
    const { path, handleOnToggle, children } = props
    return <button  onClick={handleOnToggle} >
        <Link to={path} > {children} </Link>
    </button>


}

export default DropDownMenuChild