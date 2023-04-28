import React, { useEffect, useState } from 'react';
import { PostCardd } from '../../components/cards';
import getPosts from '../../services/fetchPosts';
import { useTitle } from '../../hooks';

function Home() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getPosts(setPosts)
    }, [])
    useTitle("Home")
    return (
        <section className='max-w-2xl pt-5 mx-auto border-gray-200 dark:border-gray-800 border-x' >
            <div className='h-screen' >
                <div className='flex flex-col items-center justify-center gap-4 mx-3' >
                    {posts ? posts.map(item => <PostCardd key={item.id} {...item} />) : null}
                </div>
            </div>
        </section>
    );
}

export default Home;
