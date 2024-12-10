import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';
import { IQuestion } from '@/features/home/types/home.types';

type QaMessages = AbstractIntlMessages & {
  homepage: {
    qASection: {
      questions: Record<
        string,
        {
          questionNumber: string;
          title: string;
          answer: string;
        }
      >;
    };
  };
};

export const useQaData = () => {
  const translations = useTranslations('homepage.qASection');
  const header = translations('header');
  // Const imageUrl = translations('imageUrl');
  const imageAlt = translations('imageAlt');
  const imgAuthor = translations('imgAuthor');
  const messages = useMessages() as QaMessages;
  const keys = Object.keys(messages?.homepage?.qASection?.questions ?? {});
  const questions: IQuestion[] = keys.map((question) => ({
    questionNumber: translations(`questions.${question}.questionNumber`),
    title: translations(`questions.${question}.title`),
    answer: translations(`questions.${question}.answer`),
  }));

  return { header, imageAlt, imgAuthor, questions };
};
