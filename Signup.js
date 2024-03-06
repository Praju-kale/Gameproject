// components/Signup.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', name: '', profilePic: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Handle signup logic here
      // For simplicity, redirect to login screen
      history.push('/');
    }
  };

  return (
    <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Sign up for AIVerse</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block mb-1">Profile Picture:</label>
          <input type="text" id="profilePic" name="profilePic" value={formData.profilePic} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
      </form>
      <p className="mt-4 text-sm">Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
    </div>
  );
}

export default Signup;
