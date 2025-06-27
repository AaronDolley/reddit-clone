import React from 'react';
import './post.css'

const Post = ({ title, author, subreddit, votes, comments, image }) => {
    return (
        <div className='post'>
            <div className='post-votes'>
                <button>▲</button>
                <span>{votes}</span>
                <button>▼</button>
            </div>
            

            <div className='post-content'>
                <div className='post-info'>
                    <span className='subreddit'>r/{subreddit}</span>
                    <span className='author'>• Posted by u/{author}</span>
                </div>
            

                <h3 className='post-title'>{title}</h3>

                {image && (
                    <div className='post-image'>
                        <img src={image} alt='post'/>
                    </div>
                )}

                <div className='post-actions'>
                    <span>{comments} comments</span>
                    <span>Share</span>
                    <span>Save</span>
                </div>
            </div>
        </div>
    )
};

export default Post;