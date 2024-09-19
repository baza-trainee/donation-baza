/* eslint-disable no-alert */
'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { getApplications, postApplication } from '@/utils/api/applications';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IApplicationData } from '@/types/common.types';
import { queryKeys } from '@/constants/queryKeys';
import { useState } from 'react';

const Applications = () => {
  const queryClient = useQueryClient();
  const [isProcessing, setIsProcessing] = useState(false);

  const { register, handleSubmit } = useForm<IApplicationData>({
    mode: 'onChange',
  });

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getApplications(),
    queryKey: [queryKeys.applications.GET_APPLICATIONS],
  });

  const { mutate } = useMutation({
    mutationKey: [queryKeys.applications.ADD_APPLICATION],
    mutationFn: postApplication,
    onSuccess: () => {
      setIsProcessing(false);
      alert('success');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.applications.GET_APPLICATIONS],
      });
      setIsProcessing(false);
    },
    onError: (error: unknown) => {
      alert(error);
      setIsProcessing(false);
    },
  });

  const onSubmit: SubmitHandler<IApplicationData> = (values) => {
    mutate(values);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="page_wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          {...register('name', {
            required: 'Це поле є обов’язковим',
          })}
        />
        <input
          type="text"
          {...register('email', {
            required: 'Це поле є обов’язковим',
          })}
        />
        <input
          type="text"
          {...register('phone', {
            required: 'Це поле є обов’язковим',
          })}
        />
        <input
          type="text"
          {...register('message', {
            required: 'Це поле є обов’язковим',
          })}
        />

        <button type="submit">
          {isProcessing ? 'Обробка запиту' : 'Надіслати'}
        </button>
      </form>
      {data &&
        data?.map((item) => (
          <div key={item.id} className="wrapper">
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.message}</p>
          </div>
        ))}
    </div>
  );
};

export default Applications;
