import { Avatar } from '../../elements';

const AuthProfile = ({ createdAt, author }) => {
    const postDate = new Date(createdAt.time);
    const currentDate = new Date();
    const diffInMs = currentDate - postDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    return (
        <div className="flex items-center gap-3 " >
            <div className='flex items-center space-x-3'>
                <div className='group'>
                    <Avatar src={author.profile} />
                </div>
            </div>
            <h4 className="py-3 font-sans text-sm font-bold text-gray-400" >{author.name}</h4>
            <span className='text-blue-400' >{diffInHours === 0 ? "just now" : diffInHours > 24 ? <span className='font-sans text-xs ' >{createdAt.date}</span> : diffInHours + " Houre Ago"}    </span>
        </div>
    );
}

export default AuthProfile;
