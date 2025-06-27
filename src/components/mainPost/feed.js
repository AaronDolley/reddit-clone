import React from 'react';
import Post from './post';
import './feed.css'

const Feed = () => {
    const posts = [
        {
            title: 'React is awesome!',
            author: 'frontendDev',
            subreddit: 'reactjs',
            votes: 123,
            comments: 25,
            image: "https://via.placeholder.com/400x200",
        },
        {
      title: "Just started learning JavaScript",
      author: "codeNewbie",
      subreddit: "learnprogramming",
      votes: 98,
      comments: 14,
      image: "",
    },
    {
      title: "My first full-stack app 🚀",
      author: "devgalaxy",
      subreddit: "webdev",
      votes: 321,
      comments: 44,
      image: "https://via.placeholder.com/400x200",
    },
    ];

    return (
        <div className='feed'>
            {posts.map((post, index) => (
                <Post key={index} {...post}/>
            ))}
        </div>
    );
};

export default Feed;