import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post('http://localhost:8000/api/auth/reset-password', data);
    alert('Check your email for the reset link.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Forgot Password</h2>
      <input {...register('email')} placeholder="Email" className="input" />
      <button className="btn">Send Reset Link</button>
    </form>
  );
}
