import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
function Post({ posts, setPostData }) {
  const handleDelete = async (postId) => {
    try {
      // Delete the post from the database
      await axios.delete(`http://127.0.0.1:8000/posts/${postId}`);
      
      // Remove the post from the frontend
      setPostData((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <Link to={`/posts/${post.id}`} className="link">
            <h2>{post.title}</h2>
            <p className='text-ellipsis'>{post.content}</p>
            <h4 className='published'>Published By: {post.author}</h4>
            <h4 className='published'>Published On: {dayjs(post.published_on).format('MMMM D, YYYY')}</h4>
            <h4 className='published'>Published From: {post.country}</h4>
          </Link>
          <button onClick={() => handleDelete(post.id)} className="delete-button">
            <FaTrash className='trash'/>
          </button>
        </div>
      ))}
    </>
  );
}
export default Post;