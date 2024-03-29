import { useState } from "react";
import { AuthProfile, MainPostData, Tags } from "./components";


const PostCardd = (props) => {
    const { title, author, description, createdAt, tags } = props;
    const [showFullText, setShowFullText] = useState(false);
    function hadnleOnReadMore() {
        setShowFullText(!showFullText);
    }
    return (
        <div
            className="lg:w-[600px]  w-full p-4 mx-3 font-mono    selection:text-white selection:bg-black dark:selection:bg-sky-400 rounded-xl border border-gray-300 dark:border-gray-800"
        >
            <div className="flex flex-col " >
                {/* profile auth */}
                <AuthProfile
                    author={author}
                    createdAt={createdAt}
                />
                {/* main data */}
                <MainPostData
                    hadnleOnReadMore={hadnleOnReadMore}
                    showFullText={showFullText}
                    title={title}
                    description={description}
                />
                {/* Hashtag # */}
                <div className="flex gap-3 py-5" >
                    {
                        tags.map((tag) => <Tags key={tag} tags={tag} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostCardd;
