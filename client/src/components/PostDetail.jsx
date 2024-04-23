import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`);
        setPost(response.data); // Set the post state with the fetched data
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      }
    }
    fetchBlogPost();
  }, [id]); 

  if (!post) {
    return <div>Loading...</div>; 
  }
  // Format the "Published On" date
  const publishedOn = dayjs(post.published_on).format('MMMM D, YYYY');
 // Split the content into an array of bullet points
  const bulletPoints = post.content.split('\n').filter(item => item.trim() !== '');
  return (
    <div className='post-detail'>
       <h2>{post.title}</h2>
     <ul className='content-detail'>
         {bulletPoints.map((bullet, index) => (
           <li key={index} className='custom-list-item'>{bullet}</li>
         ))}
       </ul>
          <h4 className='published'>Published By: {post.author}</h4>
       <h4 className='published'>Published From: {post.country}</h4>
       <h4 className='published'>Published On: {publishedOn}</h4>
    </div>
  );
}

export default PostDetail;
