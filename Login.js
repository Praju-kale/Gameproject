// components/Login.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
    } else {
      // Handle login logic here
      // For simplicity, redirect to game screen
      history.push('/game');
    }
  };

  return (
    <div className="w-1/3 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Login to AIVerse</h2>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      <p className="mt-4 text-sm">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
    </div>
  );
}

export default Login;
