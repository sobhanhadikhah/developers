
function Tags({ tags }) {
    return (
        < >
            <span className="px-2 py-1 text-sm font-semibold rounded-full cursor-pointer dark:bg-slate-700 bg-slate-300 text-sky-500 hover:underline " >#{tags}</span>
        </>
    )
}

export default Tags