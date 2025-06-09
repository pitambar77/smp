import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../api/config';

export default function ResetPassword() {
  const { token } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${ BASE_URL }/api/auth/reset-password/${token}`, data);
    alert('Password reset successful');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input {...register('password')} type="password" placeholder="New Password" className="input" />
      <button className="btn">Reset Password</button>
    </form>
  );
}
