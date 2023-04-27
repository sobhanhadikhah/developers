

function MainPostData(props) {
    const { hadnleOnReadMore, title, description, showFullText } = props;

    return (
        <div className="flex flex-col justify-center w-full " >
            <h1 className="py-2 text-lg font-extrabold lg:text-xl " >{title}</h1>
            <p className="text-sm lg:text-base " >
                {showFullText === false && description.length > 275 ?
                    (
                        <>
                            {description.slice(0, 270) + "... "}
                            <button className="text-blue-400 hover:underline " onClick={hadnleOnReadMore} >Read More</button>
                        </>
                    ) :
                    (
                        <>
                            {description}

                            {description.length > 275 ? <button className="text-blue-400 hover:underline " onClick={hadnleOnReadMore} >Read Less</button> : null}
                        </>
                    )

                }
            </p>

        </div>
    )
}

export default MainPostData