import { Link } from 'react-router-dom'

function ButtonNavigition(props) {

    const { path, title, icon } = props;
    return <Link
        to={path}
        className="justify-center inline-block w-full pt-2 pb-1 text-xl text-center focus:text-sky-500 hover:text-teal-500">

        <span className='inline-block mb-1 text-xl text-black dark:text-white focus:text-sky-500 ' >{icon}</span>
        {/* <span className="block text-xs tab tab-home ">
            {title}
        </span> */}
    </Link>
}

export default ButtonNavigition