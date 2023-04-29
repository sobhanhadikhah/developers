import React, { useEffect, useState } from 'react';
import { PostCardd } from '../../components/cards';
import getPosts from '../../services/fetchPosts';
import { useTitle } from '../../hooks';
import LoadingCard from '../../components/loading/loading';

function Home() {
    const [posts, setPosts] = useState(new Array(6).fill(false));


    useEffect(() => {
        getPosts(setPosts)
    }, [])
    useTitle("Home")
    return (
        <section className='max-w-2xl pt-5 mx-auto border-gray-200 dark:border-gray-800 border-x' >
            <div className='h-screen' >
                <div className='flex flex-col items-center justify-center gap-4 mx-3' >

                    {posts.map((post, i) => {
                        return post ? (
                            <PostCardd key={post.id} {...post} />
                        ) : (
                            <LoadingCard key={i} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Home;
