import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';
import { IEvent } from '@/features/home/types/home.types';

type EventsMessages = AbstractIntlMessages & {
  homepage: {
    eventsSection: {
      events: Record<
        string,
        {
          title: string;
          description: string;
          image: string;
          imageAlt: string;
        }
      >;
    };
  };
};

export const useEventsData = () => {
  const translations = useTranslations('homepage.eventsSection');
  const title = translations('title');
  const subtitle = translations('subtitle');
  const buttonText = translations('buttonText');
  const messages = useMessages() as EventsMessages;
  const keys = Object.keys(messages?.homepage?.eventsSection?.events ?? {});
  const events: IEvent[] = keys.map((event) => ({
    title: translations(`events.${event}.title`),
    description: translations(`events.${event}.description`),
    image: translations(`events.${event}.image`),
    imageAlt: translations(`events.${event}.imageAlt`),
  }));

  return { events, title, subtitle, buttonText };
};
