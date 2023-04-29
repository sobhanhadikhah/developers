import Skeleton from "react-loading-skeleton"

function LoadingCard() {
    return (
        <div
            className="
         lg:w-[600px] w-full p-4 mx-3 font-mono dark:bg-black  bg-white 
        selection:text-white selection:bg-black dark:selection:bg-sky-400 rounded-xl
         border-gray-300 dark:border-gray-600
      "
        >
            <div className="flex flex-col " >
                {/* profile auth */}

                <div className="flex items-center gap-3 text-black dark:text-white " >
                    <div className='flex items-center space-x-3'>
                        <div className='group'>
                            {/* <Avatar /> */}
                            <Skeleton width={30} height={30} style={{ borderRadius: "100%" }} />
                        </div>
                    </div>
                    <h4 className="py-3 font-sans text-sm font-bold " ></h4>
                    <span className='text-blue-400' > </span>
                </div>

                {/* main data */}
                <div className="flex flex-col justify-center w-full text-black dark:text-white" >
                    <h1 className="py-2 text-lg font-extrabold lg:text-xl " ><Skeleton height={8} /></h1>
                    <p className="text-sm font-light leading-relaxed text-gray-400 lg:text-base " >
                        <Skeleton count={3} height={4} />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LoadingCard