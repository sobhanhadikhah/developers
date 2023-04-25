import { format } from 'date-fns';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AuthProfile = ({ createdAt, author }) => {
    const postDate = new Date(createdAt.time);
    const currentDate = new Date();
    const diffInMs = currentDate - postDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    return (
        <div className="flex items-center gap-3 " >
            <div className='flex items-center space-x-3'>
                <div className='group'>
                    <LazyLoadImage
                        effect='blur'
                        className='w-8 h-8 duration-200 rounded-full group-hover:scale-150'
                        src={`${author.profile}`}
                        alt="profile" />
                </div>
            </div>
            <h4 className="py-3 font-sans text-sm font-bold " >{author.name}</h4>
            <span className='text-blue-400' >{diffInHours === 0 ? "just now" : diffInHours > 24 ? <span className='font-sans text-xs ' >{createdAt.date}</span> : diffInHours + " Houre Ago"}    </span>
        </div>
    );
}

export default AuthProfile;
