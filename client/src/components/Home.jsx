import React, { useState, useEffect } from 'react';
import { IoMdFlower } from 'react-icons/io';
import axios from 'axios';
import Post from './Post';
import CreateBlogForm from './CreateBlogForm';

function Home() {
  const [postData, setPostData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/');
        setPostData(response.data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      }
    }
    fetchBlogPost();
  }, []);

  const handlePostSuccess = () => {
    setShowForm(false);
    // Optionally, fetch the updated post list here
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Beauty Blog Posts</h1>
        <IoMdFlower className="flower-icon" />
      </header>
      <div className="button">
        <button className="create-btn" onClick={() => setShowForm(true)}>
          Create your blog
        </button>
      </div>
      {showForm && <CreateBlogForm onPostSuccess={handlePostSuccess} setPostData={setPostData} />}
      <main className="main">
        {postData && (
          <div className="post-container">
            <Post posts={postData} setPostData={setPostData} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
