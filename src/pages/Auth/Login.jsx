// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post('http://localhost:8000/api/auth/login', data);
//       localStorage.setItem('token', res.data.token); // Store token
//       alert('Login successful!');
//       navigate('/admin'); // Redirect to protected route
//     } catch (err) {
//       alert(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
//       <h2 className="text-xl font-bold">Login</h2>

//       <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Email" className="w-full p-2 border rounded" />
//       {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//       <input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" className="w-full p-2 border rounded" />
//       {errors.password && <p className="text-red-500">{errors.password.message}</p>}

//       <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
//     </form>
//   );
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // const onSubmit = async (data) => {
  //   try {
  //     const res = await axios.post('http://localhost:8000/api/auth/login', data);
  //     localStorage.setItem('token', res.data.token);
  //     alert('Login successful!');
  //     navigate('/admin');
  //   } catch (error) {
  //     alert(error.response?.data?.message || 'Login failed');
  //   }
  // };

const onSubmit = async (data) => {
  try {
    const res = await axios.post(`${ BASE_URL }/api/auth/login`, data);

    const { token, role } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);

    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed');
  }
};


  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="flex justify-between mt-4 text-sm">
        <Link to="/signup" className="text-blue-600 hover:underline">
          Create Account
        </Link>
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

