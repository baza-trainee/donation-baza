'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn, signOut } from '@/actions/auth.action';
import { ILoginData } from '@/types/common.types';

const SignUp = () => {
  const { register, handleSubmit } = useForm<ILoginData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ILoginData> = async (values) => {
    const res = await signIn(values);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(res, null, 2));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          {...register('username', {
            required: 'Введіть дійсну електронну адресу',
          })}
        />
        <input
          type="text"
          {...register('password', {
            required: 'Введіть дійсну електронну адресу',
          })}
        />

        <button type="submit">Увійти</button>
        <button onClick={() => signOut()}>Вийти</button>
      </form>
    </>
  );
};

export default SignUp;