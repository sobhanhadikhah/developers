import React, { useEffect, useState } from 'react';
import { PostCardd } from '../../components/cards';
import getPosts from '../../services/fetchPosts';

function Home() {
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        getPosts(setPosts)
    }, [])
    return (
        <section className='max-w-2xl mx-auto border-gray-200 border-x' >
            <div>
                <div className='flex flex-col items-center justify-center gap-4 mx-3' >
                    {posts ? posts.map(item => <PostCardd key={item.id} {...item} />) : null}
                </div>
            </div>
        </section>
    );
}

export default Home;
