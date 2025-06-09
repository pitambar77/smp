import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/config';

export default function Signup() {
     const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${ BASE_URL }/api/auth/signup`, data);
      alert('Registration successful!');
        navigate('/login'); 
    } catch (err) {
      alert('Error: ' + err.response.data.message);
    }
  };

  


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">Signup</h2>

      <input {...register('username', { required: 'Username is required' })} className="w-full p-2 border rounded" placeholder="Username" />
      {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

      <input {...register('email', { required: 'Email is required' })} type="email" className="w-full p-2 border rounded" placeholder="Email" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input {...register('password', { required: 'Password is required', minLength: 6 })} type="password" className="w-full p-2 border rounded" placeholder="Password" />
      {errors.password && <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
    </form>
  );
}
