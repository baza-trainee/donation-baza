/* eslint-disable no-console */
/* eslint-disable camelcase */

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import { IApplicationData } from '@/types/common.types';
import TextArea from '@/components/ui/TextArea/TextArea';
import TextInput from '@/components/ui/TextInput/TextInput';
import { applicationScheme } from './applicationScheme';
import emailjs from '@emailjs/browser';
import styles from './ApplicationForm.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

const ApplicationForm = () => {
  const translations = useTranslations('homepage.applicationSection');
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
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      openModal('application_feedback');
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.applicationForm}>
      <div className={styles.applicationFormContent}>
        <div className={styles.applicationFormInputs}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={
                  errors.name?.message && translations(errors.name?.message)
                }
                placeholder={`${translations('form.name')}`}
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
                errorText={
                  errors.email?.message && translations(errors.email?.message)
                }
                placeholder="Email"
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
                errorText={
                  errors.message?.message &&
                  translations(errors.message?.message)
                }
                placeholder={`${translations('form.message')}`}
                title="message"
              />
            )}
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="small"
        className={styles.applicationFormButton}
      >
        {isProcessing
          ? translations('form.submitting')
          : translations('form.submit')}
      </Button>
    </form>
  );
};

export default ApplicationForm;
