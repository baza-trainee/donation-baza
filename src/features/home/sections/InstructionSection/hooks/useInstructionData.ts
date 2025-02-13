import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';
import { IInstruction } from '@/features/home/types/home.types';

type InstructionMessages = AbstractIntlMessages & {
  homepage: {
    instructionSection: {
      instructions: Record<
        string,
        {
          icon: string;
          description: string;
        }
      >;
    };
  };
};

export const useInstructionsData = () => {
  const translations = useTranslations('homepage.instructionSection');
  const header = translations('header');
  const messages = useMessages() as InstructionMessages;
  const keys = Object.keys(
    messages?.homepage?.instructionSection?.instructions ?? {}
  );
  const instructions: IInstruction[] = keys.map((instruction) => ({
    icon: translations(`instructions.${instruction}.icon`),
    description: translations(`instructions.${instruction}.description`),
  }));

  return { header, instructions };
};
