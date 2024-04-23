import React, { useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

function CreateBlogForm({ onPostSuccess , setPostData }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    country: '',
    author: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Set loading to true when form is submitted
  setTimeout(async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/', formData);
      const newPost = response.data; // Assuming the response contains the newly created post data
      onPostSuccess(); // Callback to update post list after successful post
      setFormData({
        title: '',
        content: '',
        country: '',
        author: '',
      }); // Clear the form fields
      setPostData((prevData) => [newPost, ...prevData]); // Add the new post to the front of the postData array
    } catch (error) {
      console.error('Failed to create blog post:', error);
    }
    setLoading(false); // Set loading back to false after submission
  }, 1000); // 1 second delay
};


  return (
    <form className="create-blog-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" required value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea name="content" required value={formData.content} onChange={handleChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" required value={formData.country} onChange={handleChange} />
      </label>
      <label>
        Author Name:
        <input type="text" name="author" required value={formData.author} onChange={handleChange} />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? <FaSpinner className="spinner-icon" /> : 'Submit'}
      </button>
    </form>
  );
}

export default CreateBlogForm;
