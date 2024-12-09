import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ApplicationText from './ApplicationText/ApplicationText';
import Button from '@/components/ui/Button';
import { IApplicationData } from '@/types/common.types';
import TextArea from '@/components/ui/TextArea/TextArea';
import TextInput from '@/components/ui/TextInput/TextInput';
import { applicationScheme } from './applicationScheme';
import styles from './ApplicationForm.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const ApplicationForm = () => {
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

  const onSubmit: SubmitHandler<IApplicationData> = async (values) => {
    setIsProcessing(true);
    // eslint-disable-next-line no-console
    console.log(values);
    await openModal('application_feedback');
    setIsProcessing(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.applicationForm}>
      <div className={styles.applicationFormContent}>
        <ApplicationText />
        <div className={styles.applicationFormInputs}>
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
      <Button
        type="submit"
        variant="primary"
        size="medium"
        className={styles.applicationFormButton}
      >
        {isProcessing ? 'Відправляємо' : 'Відправити'}
      </Button>
    </form>
  );
};

export default ApplicationForm;
