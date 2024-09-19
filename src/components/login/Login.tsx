'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginData } from '@/types/common.types';
import { signIn } from '@/utils/actions/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const { register, handleSubmit } = useForm<ILoginData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ILoginData> = async (values) => {
    setIsProcessing(true);
    const res = await signIn(values);
    if (res && res.success === true) {
      router.replace('/admin');
    }
    setIsProcessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          {...register('username', {
            required: 'Це поле є обов’язковим',
          })}
        />
        <input
          type="text"
          {...register('password', {
            required: 'Це поле є обов’язковим',
          })}
        />

        <button type="submit">
          {isProcessing ? 'Обробка запиту' : 'Увійти'}
        </button>
      </form>
    </>
  );
};

export default Login;
