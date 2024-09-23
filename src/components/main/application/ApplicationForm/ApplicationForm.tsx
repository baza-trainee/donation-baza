import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ApplicationText from './ApplicationText/ApplicationText';
import { IApplicationData } from '@/types/common.types';
import TextArea from '@/components/ui/text_area/TextArea';
import TextInput from '@/components/ui/text_input/TextInput';
import { applicationScheme } from './applicationScheme';
import { postApplication } from '@/utils/api/applications';
import { queryKeys } from '@/constants/queryKeys';
import styles from './ApplicationForm.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const ApplicationForm = () => {
  const queryClient = useQueryClient();
  const { openModal } = useModalContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IApplicationData>({
    resolver: zodResolver(applicationScheme),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { mutate } = useMutation({
    mutationKey: [queryKeys.applications.ADD_APPLICATION],
    mutationFn: postApplication,
    onSuccess: () => {
      setIsProcessing(false);
      openModal('application_feedback');
      reset();
      queryClient.invalidateQueries({
        queryKey: [queryKeys.applications.GET_APPLICATIONS],
      });
    },
    onError: (error: unknown) => {
      openModal('error_message');
      // eslint-disable-next-line no-console
      console.log(error);
      setIsProcessing(false);
    },
  });

  const onSubmit: SubmitHandler<IApplicationData> = async (values) => {
    setIsProcessing(true);
    await mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.application_form}>
      <div className={styles.application_form_content}>
        <ApplicationText />
        <div className={styles.application_form_inputs}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.name?.message}
                placeholder="Ім’я *"
                title="name"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.email?.message}
                placeholder="Email *"
                title="email"
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                errorText={errors.message?.message}
                placeholder="Заявка *"
                title="message"
              />
            )}
          />
        </div>
      </div>
      <button type="submit" className={styles.application_form_button}>
        {isProcessing ? 'Відправляємо' : 'Відправити'}
      </button>
    </form>
  );
};

export default ApplicationForm;
